const { errorMonitor, EventEmitter } = require('events');
class MyEmitter extends EventEmitter{}

process.stdin.resume()
const myEmitter = new MyEmitter();

myEmitter.on(errorMonitor, (err) => {
  console.log('error monitor', err);
})

myEmitter.emit('error', new Error('works'));
