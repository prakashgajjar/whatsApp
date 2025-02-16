const express = require('express');
const router = express.Router();
const Signup = require('../controllers/Signup.controller')

router.post('/',Signup);

module.exports = router;