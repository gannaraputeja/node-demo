

function sayHello(name) {
    console.log('Hello ' + name);
}

//sayHello('Raviteja');


//console.log(window);  -> window.console.log(); same global.console.log();

//setTimeout();
//clearTimeout();

//setInterval();
//clearInterval();


var message = 'Hey!';

//console.log(message);  // Not same as console.log(global.message); prints undefined because global is scoped for the file. Not accessible externally.

//console.log(module);


//const log = require('./logger')  // same as require('./logger.js')  // use const instead var, so cant be modified again.

//console.log(log);

//log('Hello! From app.js');

//console.log(__filename);
//console.log(__dirname);

/*
(function(exports, require, module, __filename, __dirname) {

})();
*/ // This is immediately invoked function expression IIFE which is an implicit implementation of node wraps our file code before executing.

const path = require('path');  // If no build-in module then looks up for existence in related path file.

var pathObj = path.parse(__filename);

//console.log(pathObj);


const os = require('os');

var totalMem = os.totalmem();
var freemem = os.freemem();

//console.log(`Total Memory: ${totalMem}`);
//console.log(`Free Memory: ${freemem}`);


const fs = require('fs');

const files = fs.readdirSync('./');

//console.log(files);

// This is async method of above sync method useful in real-time to deliver concurrency.
/*
fs.readdir('./', function(err, files) {
    if(err) console.log('Error', err);
    else console.log('Result', files);
});
*/

const EventEmitter = require('events');
const emitter = new EventEmitter();


// Register a listener
emitter.on('messageLogged', (arg) => { // e or eventArg
    console.log('Listener called.', arg);
});

// Raise an event called messageLogged with no arg
//emitter.emit('messageLogged');  // calls event emit that are registered synchronously.

// Raise an event called messageLogged
//emitter.emit('messageLogged', {id: 1, url: 'http://'});


// Raise: logging (data: message)

emitter.on('logging', (arg) => {
    console.log('Log: ', arg);
});

//emitter.emit('logging', {data: 'logged successfully.'});

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged', (arg) => {
    console.log('Listener called.', arg);
});

//logger.log('New message!!');


const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000..');





