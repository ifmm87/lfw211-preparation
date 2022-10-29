// const { EventEmitter } = require('events');
// const ee = new EventEmitter();
// const listener1 = () => { console.log('listener 1')};
// const listener2 = () => { console.log('listener 2')};
// ee.on('my-event', listener1);
// ee.on('my-event', listener2);
//
// setInterval( ()=> {
//   ee.emit('my-event');
// }, 500);
//
// setTimeout( () => {
//   ee.removeListener('my-event', listener1)
// }, 1051);
// //
// setTimeout( () => {
//   ee.removeListener('my-event', listener2)
// }, 1600);

const { EventEmitter } = require('events')
const ee = new EventEmitter()

const listener1 = () => { console.log('listener 1') }
const listener2 = () => { console.log('listener 2') }

ee.on('my-event', listener1)
ee.on('my-event', listener2)
ee.on('another-event', () => { console.log('another event') })

setInterval(() => {
  ee.emit('my-event')
  ee.emit('another-event')
}, 200)

// setTimeout(() => {
//   ee.removeAllListeners('my-event')
// }, 500)
//
setTimeout(() => {
  ee.removeAllListeners()
}, 1100)
