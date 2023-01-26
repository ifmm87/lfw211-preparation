'use strict';
const fs = require('fs');
const { Writable, Readable } = require('stream');
// const writable = fs.createWriteStream('./out1');
// writable.on('finish', () => { console.log('finished writing') })
// writable.write('A\n')
// writable.write('B\n')
// writable.write('C\n')
// writable.end('nothing more to write')
//
// const fileStream = fs.createReadStream('./out1');
//
// fileStream.on('data', (data) => { console.log(data.toString())})
// fileStream.on('end', () => console.log('ending reading'));
 process.on('uncaughtException', (err) => { 
  console.log('uncaughtException - Catch event error:', err);
  // process.stdin.resume()
});
const data = [];
const wStream = new Writable({
  write(chunk, enc, done) {
    console.log(chunk.toString())
    data.push(chunk);
    done();
  }
});

wStream.write('Hello')
wStream.write('World')
// wStream.end('end!!')
wStream.destroy(new Error('some error'));

wStream.on('error', console.error);
wStream.on('finish', () => console.log(this))
wStream.on('drain', () => console.log('drain event'))
wStream.on('pipe', () => console.log('pipe event'))

process.stdin.pipe(wStream);

wStream.write('World')
