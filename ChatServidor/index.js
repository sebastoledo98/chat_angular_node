const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer();
const { Server } = require("socket.io");
const io = new Server(server);

/*
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});
*/


io.on('error', console.error);

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('a user disconnected');
    });
    socket.on('chat message', (msg) => {
        console.log('chat message: ' + msg);
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log("listening on port 3000");
});


