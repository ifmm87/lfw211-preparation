const fs = require('fs')
const myStdout = fs.createWriteStream(null, { fd: 1 });
const myErr = fs.createWriteStream(null, { fd: 2 });
myStdout.write('stdout');
myErr.write('my stderr');
