const http = require('http');
const express = require("express");
const socketio = require('socket.io');
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const cors = require('cors');
const CryptoJS = require('crypto-js');
const path = require('path');

const PORT = process.env.PORT || 5000;

var Doctor = require('./Doctor');

const app = express();
const server = http.createServer(app);

const io = socketio(server);

app.use(jsonParser);
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.use(cors({
  origin: "*",
  credentials: true
}));
/*app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});*/

var userIDList = [];
var roomIdList = [];
var dictForChatRoomAndDoctorRalatedFields = {};
var singedDoctorList = [];
var users = []; //Active user for patient


const activeDoctorListForWiew = [];

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/api/doctorRoomList', (req, res) => {
  var response = [];

  singedDoctorList.forEach(responseFunction);

  function responseFunction(item, index, array) {
    var obj = {
      doctorname: item._name + " " + item._surname,
      room: dictForChatRoomAndDoctorRalatedFields[item._email],
      doctorarea: item._doctorArea,
      isActive: checkRoomIsActive(dictForChatRoomAndDoctorRalatedFields[item._email])
    };
    response.push(obj);
  }

  res.json(response);
});

app.get('/api/userIDForRandom', (req, res) => {
  try {
    res.json(userIDList.splice(0, 1)[0]);
  } catch (e) {
    console.log(e);
    res.json("error");
  }

});

app.post('/api/saveDoctor', jsonParser, (req, res, next) => {
  try {
    const doctor = JSON.parse(req.body.data);
    const tempDoctor = new Doctor(doctor);
    const roomNumber = roomIdList.splice(0, 1)[0];
    if (!checkDoctorMailAddress('' + tempDoctor._email)) {
      dictForChatRoomAndDoctorRalatedFields['' + tempDoctor._email] = '' + roomNumber;
      singedDoctorList.push(tempDoctor);
      res.json(roomNumber);
    } else {
      res.json("This mail address already exists!")
    }

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
    if (checkDoctorMailAddress(doctor.email) && checkPassword(doctor.password, doctor.email)) {
      //Take user room number from list for doctor and route
      res.json(dictForChatRoomAndDoctorRalatedFields[doctor.email]);
    } else {
      res.json("NotFound");
    }
  } catch (e) {
    console.log(e);
    res.json("NotFound");
  }

});

app.post('/api/checkRoomIsActive', jsonParser, (req, res, next) => {
  try {
    //Check doctor exits and return room number and name for routing
    const roomNumber = JSON.parse(req.body.data);
    var email = '';
    for (var key in dictForChatRoomAndDoctorRalatedFields) {
      if (dictForChatRoomAndDoctorRalatedFields[key] === '' + roomNumber) {
        email = key;
      }
    }
    var index = activeDoctorListForWiew.findIndex(x => x.email === email && x.numberOfUser === 0);
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

  socket.on("join", ({username, room, email}) => {
    console.log('some arrive' + "mail" + email + "username" + username + "room" + room);
    //same user name cannot enter
    try {
      const {user} = addUser({id: socket.id, username, room, email});
      if (email !== "-") {
        activeDoctorListForWiew.push({email: email, numberOfUser: 0})
      } else {
        const doctorEmail = getDoctorMailFromRoom(room);
        console.log(doctorEmail);
        const index = activeDoctorListForWiew.findIndex((user2) => {
          return user2.email === doctorEmail
        });
        console.log("index" + index);
        if (activeDoctorListForWiew[index].numberOfUser === 0) {
          activeDoctorListForWiew[index].numberOfUser = 1;
          console.log("numuser" + activeDoctorListForWiew[index].numberOfUser);
        }
      }
      socket.join(user.room);
      socket.emit("message", generatemsg("Welcome to Chat Room"));
      socket.broadcast.to(user.room).emit("message", generatemsg(`${user.username} has joined!`));

      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUserInRoom(user.room)
      });
    } catch (e) {
      console.log(e);
    }

  });

  socket.on("message", (msg) => {
    const message = decryptData(msg);
    const user = getUser(socket.id);
    io.to(user.room).emit("message", generatemsg(user.username, message.message));

  });
  socket.on("disconnect", () => {
    console.log("disconnect");
    try {
      const user = removeUser(socket.id);
      if (user) {
        io.to(user.room).emit("message", generatemsg(`Patient ${user.username} has left the room `));

        io.to(user.room).emit("roomData", {
          room: user.room,
          users: getUserInRoom(user.room)
        });
        if (user.email !== '-') {
          const index = activeDoctorListForWiew.findIndex((user2) => {
            return user2.email === user.email
          });
          if (index !== -1) {
            console.log("email" + index);
            io.to(user.room).emit("doctor left room", generatemsg("", "doctor left"));
            return activeDoctorListForWiew.splice(index, 1)[0]
          }
        } else {
          const doctorEmail = getDoctorMailFromRoom(user.room);
          const index = activeDoctorListForWiew.findIndex((user2) => {
            return user2.email === doctorEmail
          });
          if (index !== -1 && activeDoctorListForWiew[index].numberOfUser === 1) {
            activeDoctorListForWiew[index].numberOfUser = 0;
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  })
});


const newuser = [];
const addUser = ({id, username, room, email, privateKey}) => {
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
  const user = {id, username, room, email, privateKey};
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

const getDoctorMailFromRoom = (room) => {
  for (var key in dictForChatRoomAndDoctorRalatedFields) {
    if (dictForChatRoomAndDoctorRalatedFields[key] === room) {
      return key;
    }
  }

};
const generatemsg = (username, text) => {
  return CryptoJS.AES.encrypt(JSON.stringify({
    username: username,
    text: text,
    createdAt: new Date().getTime()
  }), '123456').toString();
};

const decryptData = (data) => {
  try {
    const bytes = CryptoJS.AES.decrypt(data, '123456');
    if (bytes.toString()) {
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
    return data;
  } catch (e) {
  }
}

const checkDoctorMailAddress = (email) => {
  const indexOfMail = singedDoctorList.findIndex((Doctor) => {
    return email === Doctor._email
  });

  return indexOfMail !== -1;
};

const getIndexDoctorMailAddress = (email) => {
  const indexOfMail = singedDoctorList.findIndex((Doctor) => {
    return email === Doctor._email
  });
  return indexOfMail;

};

const checkPassword = (password, mail) => {
  const indexOfMail = getIndexDoctorMailAddress(mail);
  if (indexOfMail === -1) {
    return false;
  }
  if (singedDoctorList[indexOfMail]._password === password) {
    console.log("true");
    return true;
  } else {
    return false;
  }
};

const checkRoomIsActive = (roomNumber) => {
  //Check doctor exits and return room number and name for routing
  var email = '';
  for (var key in dictForChatRoomAndDoctorRalatedFields) {
    if (dictForChatRoomAndDoctorRalatedFields[key] === roomNumber) {
      email = key;
    }
  }
  var index = activeDoctorListForWiew.findIndex(x => x.email === email && x.numberOfUser === 0);
  return index !== -1;
}

var key = function (obj) {
  // Some unique object-dependent key
  return obj.email; // Just an example
};


for (let i = 0; i < 1000; i++) {
  userIDList.push(i);
}

for (let i = 6; i < 1000; i++) {
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

let DoctorNezih = new Doctor({
  name: "Nezih",
  surname: "Sunman",
  email: "nezih.sunman@ozu.edu.tr",
  age: "21",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "male",
  doctorArea: "Dahiliye",
  password: "123456"
});
dictForChatRoomAndDoctorRalatedFields[DoctorNezih._email] = '1';
let DoctorEce = new Doctor({
  name: "Ece",
  surname: "Nigiz",
  email: "ece.nigiz@ozu.edu.tr",
  age: "24",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "female",
  doctorArea: "Dahiliye",
  password: "123456"
});
dictForChatRoomAndDoctorRalatedFields[DoctorEce._email] = '2';
let DoctorBurak = new Doctor({
  name: "Burak",
  surname: "Yıldırım",
  email: "burak.yildirim@ozu.edu.tr",
  age: "21",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "male",
  doctorArea: "Dahiliye",
  password: "123456"
});
dictForChatRoomAndDoctorRalatedFields[DoctorBurak._email] = '3';

let DoctorNadir = new Doctor({
  name: "Nadir",
  surname: "Yüceer",
  email: "nadir.yuceer@ozu.edu.tr",
  age: "21",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "male",
  doctorArea: "Dahiliye",
  password: "123456"
});
dictForChatRoomAndDoctorRalatedFields[DoctorNadir._email] = '4';

let DoctorEcem = new Doctor({
  name: "Ecem",
  surname: "Öz",
  email: "ecem.oz@ozu.edu.tr",
  age: "21",
  phonenumber: "53325981",
  birthdate: "17.06",
  gender: "male",
  doctorArea: "Dahiliye",
  password: "123456"
});
dictForChatRoomAndDoctorRalatedFields[DoctorEcem._email] = '5';


singedDoctorList.push(DoctorNezih);
singedDoctorList.push(DoctorEce);
singedDoctorList.push(DoctorBurak);
singedDoctorList.push(DoctorNadir);
singedDoctorList.push(DoctorEcem);


server.listen(PORT, () => console.log("Server has started on port:`" + PORT));
