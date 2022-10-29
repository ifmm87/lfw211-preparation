const { EventEmitter } = require('events');
const ee = new EventEmitter();
ee.on('close', () => {
  console.log('close event fired');
});
ee.on("add", (a, b, c) => {
  console.log( a + b + c);
});
ee.emit("add", 0, 2, 3);
ee.emit('close');
