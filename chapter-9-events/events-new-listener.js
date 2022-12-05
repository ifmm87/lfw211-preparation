const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.once('newListener', (eventName, fn) => {
  if (eventName === 'event') {
    emitter.on('event', () => {
      console.log('event C');
    })
  }
  console.log(`event ${eventName} added.`);
})

emitter.on('event', () => {
  console.log('event A');
});
emitter.on('eventb', () => {
  console.log('event B');
});

emitter.emit('event');
emitter.emit('eventb');
console.log(emitter.listenerCount('event'));
console.log(emitter.listeners('event'));
console.log(emitter.eventNames('event'));
