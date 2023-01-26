const { open, readFile, readSync, statSync, closeSync } = require('fs');
const FILE = './really-big-file.json';
const { size: totalSize } = statSync(FILE)
open(FILE, (err, fd) => {
  const buffer = Buffer.alloc(320)
  for(let i = 0; i <= totalSize / buffer.length; i++) {
    readSync(fd, buffer, 0, buffer.length, i * buffer.length, null);
    console.log(buffer.toString());
  }
  closeSync(fd);
})
