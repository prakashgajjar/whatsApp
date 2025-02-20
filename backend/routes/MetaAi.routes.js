const express = require('express');
const router = express.Router();
const Protected = require('../middleware/ProtectRoute.middleware.js');
const MetaAi = require('../controllers/MetaAiChat.controller.js')

router.post('/',Protected,MetaAi);

module.exports = router;