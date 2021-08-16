const message = require('../services/welcome');

const helloWorld = async (req, res) => {
    res.status(200).json({
        code: 200,
        message: message.getMessage(),
    }) 
}

module.exports = {
    helloWorld
}