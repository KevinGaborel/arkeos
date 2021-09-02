require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');


//Socket.io
const http = require('http');
const server = http.createServer(app);
//const { Server } = require("socket.io");
//const io = new Server(server);

/*
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/statics'));
*/


// gestion des tokens
const jwt = require("jsonwebtoken");

// required les différents routers
const articleRouter = require("./app/routers/articleRouter");
const marketRouter = require("./app/routers/marketRouter");
const userRouter = require("./app/routers/userRouter");
const loginRouter = require("./app/routers/loginRouter");
const signinRouter = require("./app/routers/signinRouter");
const messageRouter = require("./app/routers/messageRouter");
const profilRouter = require("./app/routers/profilRouter");
const imageRouter = require("./app/routers/imageRouter");

const port = process.env.PORT || 3000;

// pour le moment on autorise toutes les entrées
app.use(cors("*"));


app.use(express.json());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended: true }));

// middleware pour controller si y a un token
const {controlIfToken} = require('./app//middlewares/members');
const { request } = require("express");

app.use(controlIfToken);

/*
if (request.user){
   on écoute les messages
  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log("message", msg);
      io.emit('chat message', msg);
    });
  });
}
*/

// tous les routers
app.use("/login", loginRouter);
app.use("/signin", signinRouter);
app.use("/articles", articleRouter);
app.use("/marketplace", marketRouter);
app.use("/membres", userRouter);
app.use("/messages", messageRouter);
app.use("/profil", profilRouter);
app.use("/image", imageRouter);




server.listen(3000, () => {
  console.log('listening on *:3000');
});