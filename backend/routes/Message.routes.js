const express = require('express');
const router = express.Router();
const sendMessage = require('../controllers/Message.controller.js');
const Protected = require('../middleware/ProtectRoute.middleware.js');
const getMessage = require('../controllers/GetMessage.controller.js');

router.post('/send/:id',Protected,sendMessage);
router.get('/get/:id',Protected,getMessage);

module.exports = router;