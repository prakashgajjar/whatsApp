const express = require('express');
const router = express.Router();
const Contacts =  require('../controllers/Contact.controller.js');

router.get('/',Contacts);

module.exports = router;