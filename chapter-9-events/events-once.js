const { EventEmitter, errorMonitor } = require('events');
const eventEmitter = new EventEmitter();
let m = 0;
eventEmitter.once('event', () => {
  console.log(++m);
});
eventEmitter.on('event', () => {
  console.log('guacal');
});
eventEmitter.emit('event');
eventEmitter.emit('event');
eventEmitter.emit('event');
// // prints 1 2 3

// eventEmitter.once('event', () => {
//   console.log('emiting just once')
// });
// eventEmitter.on(errorMonitor, (err) => {
//   console.log(err);
// })
// eventEmitter.emit('event');
// eventEmitter.emit('event');
// eventEmitter.emit('error', new Error('my error'));

