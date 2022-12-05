setInterval(() => {
  console.log('this interval will keep the process open');
  process.exitCode = 1;
}, 500);
setTimeout(() => {
  console.log('exit after this');
  process.exit(2);
}, 2000);

process.on('exit', (code) => {
  console.log('exiting with code', code);
  setTimeout(() => {
    console.log('that will never happen')
  }, 50);
})
