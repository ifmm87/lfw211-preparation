const { EventEmitter} = require('events')
const myEmitter = new EventEmitter();
myEmitter.on('event', async (a, b) => {
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});
myEmitter.emit('event', 'a', 'b');
