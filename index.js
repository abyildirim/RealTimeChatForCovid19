const http = require('http')
const express = require("express");
const socketio = require('socket.io');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
// const cors = require('cors');

const PORT = process.env.PORT || 5000;

var Doctor = require('./Doctor');

const app = express();
app.use(jsonParser);
const distDir = __dirname + "/dist/";
// app.use(express.static(distDir));

//For the production open
/*app.use(cors({
  origin: "*",
  credentials: true
}));*/
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});
const server = http.createServer(app);
//For the production close
const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

var userIDList = [];
var roomIdList = [];
var dictForChatRoomAndDoctorRalatedFields = {};
var singedDoctorListForActiveOrPassiveDoctor = [];
var users = []; //Active user for patient


const activeDoctorListForWiew = [];


app.get('/api/doctorRoomList', (req, res) => {
  var response = [];

  singedDoctorListForActiveOrPassiveDoctor.forEach(responseFunction);

  function responseFunction(item, index, array) {
    var obj = {
      doctorname: item._name + " " + item._surname,
      room: dictForChatRoomAndDoctorRalatedFields[item._email],
      doctorarea: item._doctorArea
    };
    response.push(obj);
  }

  res.json(response);
});

app.get('/api/userIDForRandom', (req, res) => {
  res.json(userIDList.pop());
});

app.post('/api/saveDoctor', jsonParser, (req, res, next) => {
  try {
    const doctor = JSON.parse(req.body.data);
    const tempDoctor = new Doctor(doctor);
    const roomNumber = roomIdList.pop();
    activeDoctorListForWiew.push({email: '' + tempDoctor._email});
    dictForChatRoomAndDoctorRalatedFields[tempDoctor._email] = roomNumber;
    singedDoctorListForActiveOrPassiveDoctor.push(tempDoctor);
    res.json(roomNumber);
    //Bug not chegking room number same of system of remove all room numbers
  } catch (e) {
    console.log(e);
    res.json("error");
  }

});

app.post('/api/doctorValidationForSignIn', jsonParser, (req, res, next) => {
  try {
    //Check doctor exits and return room number and name for routing
    const doctor = JSON.parse(req.body.data);
    if (checkDoctorMailAddress(doctor.email) && checkDoctorNameAndSurname(doctor.name, doctor.surname, doctor.email)) {
      //Take user room number from list for doctor and route
      res.json(dictForChatRoomAndDoctorRalatedFields[doctor.email]);
    } else {
      res.json("NoUser");
    }
  } catch (e) {
    console.log(e);
    res.json("error");
  }

});

app.post('/api/checkRoomIsActive', jsonParser, (req, res, next) => {
  try {
    //Check doctor exits and return room number and name for routing
    const roomNumber = JSON.parse(req.body.data);
    var email = '';
    for (var key in dictForChatRoomAndDoctorRalatedFields) {
      if (dictForChatRoomAndDoctorRalatedFields[key] === roomNumber) {
        email = key;
      }
    }
    var index = activeDoctorListForWiew.findIndex(x => x.email === email);
    if (index !== -1) {
      res.json("true");
    } else {
      res.json("false");
    }
  } catch (e) {
    console.log(e)
  }
});


io.on("connection", (socket) => {
  console.log("new connection");

  socket.on("join", ({username, room, email}) => {
    console.log('some arrive' + username + room);
    //same user name cannot enter
    const {user} = addUser({id: socket.id, username, room, email});
    if(email != "-"){
      activeDoctorListForWiew.push({email: email})
    }
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
      });
      if (user.email !== '-') {
        const index = activeDoctorListForWiew.findIndex((user2) => {
          return user2.email === user.email
        });
        if (index !== -1) {
          return activeDoctorListForWiew.splice(index, 1)[0]
        }
      }
    }

  })
});

const newuser = [];
const addUser = ({id, username, room, email}) => {
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
  const user = {id, username, room, email};
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
  return users

};

const generatemsg = (username, text) => {
  return {
    username: username,
    text: text,
    createdAt: new Date().getTime()
  }
};

const checkDoctorMailAddress = (email) => {
  const indexOfMail = singedDoctorListForActiveOrPassiveDoctor.findIndex((Doctor) => {
    return email === Doctor._email
  });

  return indexOfMail !== -1;
};

const getIndexDoctorMailAddress = (email) => {
  const indexOfMail = singedDoctorListForActiveOrPassiveDoctor.findIndex((Doctor) => {
    return email === Doctor._email
  });
  return indexOfMail;

};


const checkDoctorNameAndSurname = (name, surname, mail) => {
  const indexOfMail = getIndexDoctorMailAddress(mail);
  if (indexOfMail === -1) {
    return false;
  }
  if (singedDoctorListForActiveOrPassiveDoctor[indexOfMail]._name === name && singedDoctorListForActiveOrPassiveDoctor[indexOfMail]._surname === surname) {
    return true;
  } else {
    return false;
  }
};

var key = function (obj) {
  // Some unique object-dependent key
  return obj.email; // Just an example
};


for (let i = 0; i < 1000; i++) {
  userIDList.push(i);
}

for (let i = 0; i < 1000; i++) {
  roomIdList.push(i);
}
/*
var obj = {"name":  input.name;
    "surname": input.surname;
    "email" = input.email;
    "age = input.age;
   "phonenumber" = input.phonenumber;
    "birthdate" = input.birthdate;
    "gender" = input.gender;
    "doctorArea" = input.doctorArea;};*/

let newDoctor = new Doctor({
  name: "nezih",
  surname: "sunman",
  email: "nezih.sunman@ozu.edu.tr",
  age: "21",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "male",
  doctorArea: "Dahiliye"
});
dictForChatRoomAndDoctorRalatedFields[newDoctor._email] = 1;
let newDoctor2 = new Doctor({
  name: "ece",
  surname: "nigiz",
  email: "ece.nigiz@ozu.edu.tr",
  age: "24",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "female",
  doctorArea: "Dahiliye"
});
dictForChatRoomAndDoctorRalatedFields[newDoctor2._email] = 2;
let newDoctor3 = new Doctor({
  name: "nezih",
  surname: "sunman",
  email: "nezih.sunmannn@ozu.edu.tr",
  age: "21",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "male",
  doctorArea: "Dahiliye"
});

dictForChatRoomAndDoctorRalatedFields[newDoctor3._email] = 3;


singedDoctorListForActiveOrPassiveDoctor.push(newDoctor);
singedDoctorListForActiveOrPassiveDoctor.push(newDoctor2);
singedDoctorListForActiveOrPassiveDoctor.push(newDoctor3);


server.listen(PORT, () => console.log("Server has started on port:`" + PORT));
