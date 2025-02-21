const {Server} = require('socket.io');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

const http = require('http');
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        credentials: true, 
    }
})

//messages 
 const getReceiverSocketId = (userId) => {
    return usersSocket[userId];
}


const usersSocket  = {}

io.on('connection', (socket) => {
 console.log('New client connected' , socket.id);

 const userId = socket.handshake.query.userId;
 if (userId) {
    // Remove any old socket ID if user already connected
    if (usersSocket[userId]) {
        delete usersSocket[userId];
    }
    usersSocket[userId] = socket.id;
}
    console.log(usersSocket);
    io.emit("getOnlineUser" , Object.keys(usersSocket));

   socket.on('disconnect', () => {
    console.log('Client disconnected' , socket.id);
    delete usersSocket[userId];
    io.emit("getOnlineUser" , Object.keys(usersSocket));
   });  
})



module.exports = {app, server ,io , getReceiverSocketId};