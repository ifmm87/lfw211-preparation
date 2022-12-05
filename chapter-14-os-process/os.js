const os = require('os');

console.log('arch>> ', os.arch())
console.log('constants>> ', os.constants)
console.log('cpus', os.cpus());
console.log('free memory', os.freemem()/1024);
console.log('total memory', os.totalmem()/1024);
console.log('home dir', os.homedir());
console.log('home netrof ir', os.networkInterfaces());
console.log('platform', os.platform());
console.log('release', os.release());
console.log('release', os.userInfo());
console.log('machine', os.machine());
