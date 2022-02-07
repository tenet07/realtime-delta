const express = require('express');
const path = require('path');
const app = express(); 
var server = require('http').Server(app);
const io = require('socket.io').listen(server, {
    cors: {
      origin: '*',
      credentials: true
    }
})


io.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });
  


io.on('connection', (client) => {
    // here you can start emitting events to the client 
    console.log('listening on client', client);
  });

const port = 8000;
io.listen(port);
console.log('listening on port ', port);