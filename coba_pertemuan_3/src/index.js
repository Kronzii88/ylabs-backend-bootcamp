const app = require('./application');
const http = require('http');

const server = http.createServer(app.start());

server.listen(8080, 'localhost')
server.on('listening', () => {
    console.log('Server listen on port', 8080);
})
