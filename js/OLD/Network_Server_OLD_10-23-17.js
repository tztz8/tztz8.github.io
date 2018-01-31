// Server set up

// Pulling in the library (express)
var express = require('express');

// Launch the library and set the library to app
var app = express();

// Set a port listener to server at a port (port:8192)
var server = app.listen(8192);

// this line of code is to host files on the port --> library.use(name of library.not changing files(folder));
//app.use(express.static('puplic'));

var helmet = require('helmet')
app.use(helmet())

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

var alldata = null;
var backupalldata = null;

var Tusers = 0;

function newConnection(socket){
    console.log("New connection ID:" + socket.id);

    Tusers++;
    socket.emit('Tusers', Tusers);

    socket.on('mouse' , mouseSed);
    function mouseSed(data) {
        alldata = data;
        socket.broadcast.emit('mouse', data);
        //io.socket.emit('mouse', data);
        //console.log(data);
    }

    socket.on('update', updater);
    function updater(data2){
        if (data2 = 'backup'){
            var temp = alldata;
            alldata = backupalldata;
            backupalldata = temp;
        }

        if (!(alldata == null)){
            socket.emit('mouse', alldata);
        }
        socket.emit('Tusers', Tusers);
    }

    socket.on('user', usersMouse);
    function usersMouse(data3) {
        socket.broadcast.emit('users', data3);
        //console.log(data3);
    }

    /*
    socket.on('Tusers', retrenTusers);
    function retrenTusers(data4){
        socket.emit('Tusers', Tusers);
    }
    */
    socket.on('disconnect', function(data4) {
        console.log('disconnect id:' + socket.id);
        Tusers--;
        if (Tusers == 0){
            backupalldata = alldata;
            alldata = null;
        }else {
            socket.broadcast.emit('Tusers', Tusers);
        }
    });
}