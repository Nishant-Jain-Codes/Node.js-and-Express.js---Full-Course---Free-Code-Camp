const EventEmitter = require('events');
const customEmitter = new EventEmitter();
customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`);
}
);
customEmitter.on('response', () => {
    console.log(`some other logic here`);
}
);
customEmitter.emit('response', 'nishant', 69);


// http module extends event emitter
const http = require('http');
const server = http.createServer();
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
    console.log('request event');
    res.end('Welcome');
}
);
server.listen(5000);
