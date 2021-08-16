const express = require('express');
const app = express();

// inisiasi routes
const router = require('../routes/api');

function start() {
    
    // init routes
    app.use('/api/v1', router);

    return app;
}

function stop() {

}

module.exports = {
    start,
    stop
}