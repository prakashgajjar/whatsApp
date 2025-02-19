const express = require('express');
const router = express.Router();
const Contacts =  require('../controllers/Contact.controller.js');
const Protected = require('../middleware/ProtectRoute.middleware.js');

router.get('/',Protected,Contacts);

module.exports = router;