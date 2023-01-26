const { closeSync, writeSync, openSync, readdirSync } = require('fs');

const fd = openSync('./list-files.txt','w');
const files = readdirSync('./');

files.map(file => {
  writeSync(fd, `file: ${file}\n`);
})
fd.closeSync()
