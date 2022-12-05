const process = require('process');
process.on('SIGHUP', () => {
  console.log('got sighup signal');
});

setTimeout(() => {
  console.log('exiting');
  process.exit(0);
}, 100);

process.kill(process.pid, 'SIGHUP');
