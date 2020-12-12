var app = require('express')();
var http = require('http').createServer(app);

const doctorUsers = [];
const webSocNumber = [];
webSocNumber.push({user: 'Canan Karatay', room: '1'});
webSocNumber.push({user: 'Canan Hoca', room: '2'});
webSocNumber.push({user: 'Canan Doktor', room: '3'});


http.listen(3000, () => {
  console.log('listening on *:3000');
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
