const { createReadStream } = require('fs');

const stream = createReadStream('/dev/urandom');

let size = 0;

stream.on('data', (chunk) => {
  size += chunk.length;
  console.log('chunk', size);
});



