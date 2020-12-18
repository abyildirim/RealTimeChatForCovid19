var app = require('express')();
var http = require('http').createServer(app);
var io =  require('socket.io')(http, {cors: {origin: "*" }});

const doctorUsers = [];
const webSocNumber = [];
webSocNumber.push({user: 'Canan Karatay', room: '1'});
webSocNumber.push({user: 'Canan Hoca', room: '2'});
webSocNumber.push({user: 'Canan Doktor', room: '3'});

function SearchminRoomId(){
  var foundmin = false;
	var min=1;
  while(true){
    for(i=0; i<webSocNumber.length; i++){
      if(webSocNumber[i].room === 1) continue;
      else if(i===webSocNumber-1) foundmin = true;
    }
    if(foundmin) break;
    else min++;
  }
  return min;
}


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});


app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.get('/api/doctorRoomList', (req, res) => {
  res.json(webSocNumber);
});

app.post('/api/createNewDoctorUser', (req, res) => {
  const user = req.body.user;
  doctorUsers.push(user);
  res.json("new doctor added successfully")
});

io.on('connection', (socket) => {
  console.log('connection OK');
  socket.on('cli_init', (message) => {
    console.log(message);
    socket.join(webSocNumber[message-1].room);
    io.to(socket).emit('cli_initcomplete', $(message));
  });

  socket.on('doc_init', (message) => {
    for(i=0;i<doctorUsers.length;i++){
      if(message===doctorUsers[i]){
        const index = webSocNumber.indexOf('undefined');
        if(index===-1) webSocNumber.push({user: doctorUsers[i], room: webSocNumber.length});
        else webSocNumber.fill({user: doctorUsers[i], room: index+1}, index, index+1);
        socket.join(webSocNumber[i].room)
        break;
        }
      else if(i===doctorUsers.length-1){
        io.to(socket).emit("error", "doctor 404")
      }
    }
  });
  socket.on()
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
