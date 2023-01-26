const { EventEmitter } = require('events');

const ee = new EventEmitter();

ee.on('event', function(a, b) {
  console.log(a, b, this, ee, this === ee)
});

ee.emit('event', 'a', 'b');
