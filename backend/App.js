const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const upload = require('./middleware/Upload.middleware.js');
const Login = require('./routes/Login.routes.js');
const Signup = require('./routes/Signup.routes.js');
const Contact = require('./routes/Contact.routes.js');
const mongooDB = require('./config/MongooseConnect.js');
const Messages = require('./routes/Message.routes.js');
const CurrentUser = require('./routes/CurrentUser.routes.js');
const MetaAi = require('./routes/MetaAi.routes.js')
const {app , server} = require('./Socket/Server.js');
const cookieParser = require('cookie-parser');

require('dotenv').config();
mongooDB();
// const app = express();
app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,    
}));

app.use(express.static('public'));
app.use('/signup', upload.single('avatar'), Signup);
app.use('/login', Login);
app.use('/contact', Contact);
app.use('/message',Messages);
app.use('/userfind',CurrentUser);
app.use('/meta',MetaAi)

const uploadDir = path.join(__dirname, '/public/images');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server is running on port", PORT)
});
