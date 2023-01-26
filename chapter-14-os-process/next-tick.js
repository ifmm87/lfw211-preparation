const { nextTick} = require('process');

console.log('first')
setImmediate(()=> { console.log('another async op')})
// setInterval(() => console.log('ever another async op'), 100)
setTimeout(() => console.log('ever another async op'), 0)
process.nextTick(() => {
  console.log('async op')
})
process.nextTick(() => {
  console.log('another async')
})
console.log('last')
console.log('last')
console.log('last')
