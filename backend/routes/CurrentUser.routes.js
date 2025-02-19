const express = require('express');
const router = express.Router();
const CurrentUser  = require('../controllers/CurrentUser.controller.js')
const Protected = require('../middleware/ProtectRoute.middleware.js');

router.get('/',Protected,CurrentUser);

module.exports = router;