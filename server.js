var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
  cors: {
    credentials: true,
    origin: "http://localhost:4200",
    methods: ["GET", "POST"]
  }
});

const port = process.env.PORT || 3000;
var userIDList = [];

for (let i = 0; i < 1000; i++) {
  userIDList.push(i);
}

var users = []; //Active user for patient
const dockerListorDockerSocketList = [];
dockerListorDockerSocketList.push({doktorname: 'Canan Karatay', room: '1'});
dockerListorDockerSocketList.push({doktorname: 'Canan Hoca', room: '2'});
dockerListorDockerSocketList.push({doktorname: 'Canan Doktor', room: '3'});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

app.get('/api/doctorRoomList', (req, res) => {
  res.json(dockerListorDockerSocketList);
});

app.get('/api/userIDForRandom', (req, res) => {
  res.json(userIDList.pop());
});

app.post('/api/createNewDoctorUser', (req, res) => {
  const user = req.body.user;
  dockerListorDockerSocketList.push(user);
  res.json("new doctor added successfully")
});
io.on("connection", (socket) => {
  console.log("new connection");

  socket.on("join", ({username, room}) => {
    console.log('some arrive' + username + room);
    //same user name cannot enter
    const {user} = addUser({id: socket.id, username, room});

    socket.join(user.room);
    socket.emit("message", generatemsg("Admin ,Welcome"));
    socket.broadcast.to(user.room).emit("message", generatemsg(`Admin ${user.username} has joined!`));

    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUserInRoom(user.room)
    });
  });

  socket.on("message", (msg) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", generatemsg(user.username, msg.message));
    console.log('message working');
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    console.log(user);
    if (user) {
      io.to(user.room).emit("message", generatemsg(`Admin ${user.username} A user  has left`));

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUserInRoom(user.room)
      })
    }

  })
});

const newuser = [];
const addUser = ({id, username, room}) => {
  //clean the data

  username = username.toLowerCase();
  room = room.toLowerCase();

  //vlidate data
  if (!username || !room) {
    return {
      error: 'Username and room are required!'
    }
  }

  //check for existing users
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  //va;idate username
  if (existingUser) {
    return {
      error: "username iss already used"
    }
  }

  //store user
  const user = {id, username, room};
  users.push(user);
  return {user}
};


const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id
  });
  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
};

const getUser = (id) => {
  return users.find((user) => {
    return user.id === id
  })
};

const getUserInRoom = (room) => {
  const u = [];
  users.filter((user) => {
    user.room === room
  });
  console.log(users);
  return users

};

const generatemsg = (username, text) => {
  return {
    username: username,
    text: text,
    createdAt: new Date().getTime()
  }
};

http.listen(port, () => {
  console.log('listening on *:' + port);
});
