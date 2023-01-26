const { EventEmitter } = require('events');

class MyEmitter extends EventEmitter {
  constructor(opts = {}) {
    super(opts);
    this.name = opts.name;
  }
  destroy (err) {
    if (err) {
      this.emit('error', err);
    }
    this.emit('close');
  }
}

const ee = new MyEmitter();
ee.on('event', (something) => {
  console.log('this was my event', something);
})
ee.emit('event', 'hello');
ee.destroy('errrr')
