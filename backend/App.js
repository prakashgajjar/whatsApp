const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('http');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const upload = require('./middleware/Upload.middleware.js');
const Login = require('./routes/Login.routes.js');
const Signup = require('./routes/Signup.routes.js');
const Contact = require('./routes/Contact.routes.js');
const mongooDB = require('./config/MongooseConnect.js');

require('dotenv').config();

const app = express();
mongooDB();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5174', 'https://localhost:5175', 'https://localhost:5174', 'https://localhost:5176'],
    }
});

app.use(cors({
    origin: ['http://localhost:5174', 'https://localhost:5175', 'https://localhost:5174', 'https://localhost:5176'],
}));

app.use(express.static('public'));
app.use('/signup', upload.single('avatar'), Signup);
app.use('/login', Login);
app.use('/contact', Contact);

const uploadDir = path.join(__dirname, '/public/images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

io.on("connection", (socket) => {
    // console.log("User connected:", socket.id);
    socket.on("disconnect", () => {
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
