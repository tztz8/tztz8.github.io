// Server set up

// Pulling in the library (express)
var express = require('express');

// Launch the library and set the library to app
var app = express();

// Set a port listener to server at a port (port:8192)
var server = app.listen(8192);

// this line of code is to host files on the port --> library.use(name of library.not changing files(folder));
//app.use(express.static('puplic'));

console.log("My server is running");

// ----------------------------------------------------
// socket set up
// ----------------------------------------------------

// Pulling in the library (socket.io)
var socket = require('socket.io');

// Launch the library and set the library to in put, out put (io) and tell the library where the server is
var io = socket(server);

// call the libary (io.socket) then say when a connection happen ('connection') then launch function (newConnection)
io.sockets.on('connection', newConnection);

function newConnection(socket){
    console.log("New connection ID:" + socket.id);

    socket.on('mouse' , mouseSed);
    function mouseSed(data) {
        socket.broadcast.emit('mouse', data);
        //io.socket.emit('mouse', data);
        //console.log(data);
    }
}