const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const unicFilename = file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
        console.log(unicFilename)
        cb(null,unicFilename );
    }
});

const upload = multer({ storage: storage });
module.exports = upload;