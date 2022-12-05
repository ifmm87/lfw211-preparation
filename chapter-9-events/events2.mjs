import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('ivanEvent', function (...args)  {
  setImmediate(() => {
    console.log('ivan event was fired', args, this, this === myEmitter);
  })
})

myEmitter.emit('ivanEvent', 'it', 'works')
