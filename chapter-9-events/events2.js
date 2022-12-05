import { EventEmitter } from 'events';
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('ivanEvent', (...args) => {
  console.log('ivan event was fired', args);
})

myEmitter.emit('ivanEvent', 'it', 'works')
