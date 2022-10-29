'use strict';
const fs = require('fs');
const path = require('path');
const readable = fs.createReadStream(path.join(__dirname, 'big-test-file.txt'));
readable.on('data', data => console.log('got data chunk', data));
readable.on('end', () => console.log('finished'));

// fs.writeFile('big-test-file.txt', 'hey there');
// const stream = fs.createWriteStream('big-test-file.txt');
// for(let i = 0; i < 10000; i++) {
//   stream.write('My row ' + i + 1 + '\n');
// }

