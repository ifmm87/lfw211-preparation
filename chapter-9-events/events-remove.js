const { EventEmitter } = require('events');

const listener1 = () => console.log('listener 1');
const listener2 = () => console.log('listener 2');

const emitter = new EventEmitter();
emitter.on('newListener', (eventName, listener) => {
  console.log('listener added', eventName, listener);
});

emitter.on('someEvent', listener1);
emitter.on('someEvent', listener2);
emitter.on('removeListener', (eventName, listener) => {
  console.log('listener removed', eventName, listener);
});

setInterval(() => {
  emitter.emit('someEvent');
}, 500);

setTimeout(() => {
  emitter.removeListener('someEvent', listener1);
}, 2100);

setTimeout(() => {
  emitter.removeAllListeners();
}, 5011);
