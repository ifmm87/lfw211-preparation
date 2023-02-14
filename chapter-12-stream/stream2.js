'use strict';
const { Readable } = require('stream');
const arr = ['ivan', 'fernando', 'mujica']
function createReadStream() {
  return new Readable({
    read(size) {
      if(arr.length) this.push(arr.shift())
      else this.push(null);
    }
  });
}
const stream = createReadStream();
stream.on('data', (chunk) => {
  console.log('>>>', chunk.toString())
})
stream.on('end', (data) => console.log('this is the',data))
// const { Readable } = require('stream')
// const readable = Readable.from(['some', 'data', 'to', 'read'])
// readable.on('data', (data) => { console.log('got data', data) })
// readable.on('end', () => { console.log('finished reading') })
