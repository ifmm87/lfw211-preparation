const { EventEmitter } = require('node:events');

const ee1 = new EventEmitter({ captureRejections: true });
ee1.on('something', async (value) => {
  throw new Error('kaboom');
});

ee1.on('error', console.log);

const ee2 = new EventEmitter({ captureRejections: true });
ee2.on('something', async (value) => {
  throw new Error('kaboom');
});
ee2.emit('something', 'a');
ee1.emit('something', 'a');
ee2[Symbol.for('nodejs.rejection')] = console.log;