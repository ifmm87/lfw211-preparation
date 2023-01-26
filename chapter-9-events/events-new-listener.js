const { EventEmitter } = require('events');

const emitter = new EventEmitter();

emitter.on('newListener', (eventName, fn) => {
  // if (eventName === 'event') {
  //   emitter.on('event', () => {
  //     console.log('event C');
  //   })
  // }
  console.log(`event ${eventName} added.`);
});

emitter.on('removeListener', (eventName, listener) => {
  // if (eventName === 'event') {
  //   emitter.on('event', () => {
  //     console.log('event C');
  //   })
  // }
  console.log(`event ${eventName} removed.`);
});


emitter.on('event', () => {
  console.log('event A');
});
emitter.on('event', () => {
  console.log('event B');
});

emitter.emit('event');
emitter.emit('eventb');
console.log(emitter.listenerCount('event'));
console.log(emitter.listeners('event'));
console.log(emitter.eventNames('event'));

emitter.removeListener('event', );
console.log(emitter.listeners('event'));
