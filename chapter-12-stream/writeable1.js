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

const createWriteStream = (data) => {
  return new Writable({
    write (chunk, enc, next) {
      data.push(chunk);
      next();
    }
  })
}
const data = [];
const writable = createWriteStream(data);
writable.on('finish', () => { console.log('finished writing', Buffer.concat(data).toString()) })
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('nothing more to write')

