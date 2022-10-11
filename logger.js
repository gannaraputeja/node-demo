
const EventEmitter = require('events');
//const eventEmitter = new EventEmitter(); // This is not required as class already extends and cna eb referred using this keyword.

var url = 'http://mylogger.io/log';

/*
 function log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise an event called messageLogged
        this.emit('messageLogged', {id: 1, url: 'http://'});
    
    } 
 */

class Logger extends EventEmitter {

    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // Raise an event called messageLogged
        this.emit('messageLogged', {id: 1, url: 'http://'});
    
    }

}


//module.exports.log = log;  // export as object with log as property in it instead use below when exporting single function.
//module.exports = log;
//module.exports.endPoint = url;

module.exports = Logger;
