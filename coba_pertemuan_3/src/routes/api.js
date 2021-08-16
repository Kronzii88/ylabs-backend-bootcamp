const express = require('express');
const router = express.Router();

// import handler
const globalHandler = require('../handler/global');
router.get('/', globalHandler.helloWorld);

module.exports = router;