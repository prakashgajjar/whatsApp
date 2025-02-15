const express = require('express')
const {Server} = require('socket.io')
const {createServer} = require('http');
const cors = require('cors');
const { connected } = require('process');
const app = express();
require('dotenv').config();

const server = createServer(app);
const io = new Server(server,{
   cors : {
    origin: 'http://localhost:5176',
   }
});
app.use(cors({
    origin: 'http://localhost:5176',
}));

io.on("connection", ()=>{
    console.log("user connected")
})

const PORT = process.env.PORT || 3000;
server.listen(3000,()=>{
    console.log("server is running on port 3000")
})