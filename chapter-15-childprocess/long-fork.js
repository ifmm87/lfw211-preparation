const { fork } = require('child_process')

const forked = fork('./long-run-fork');

forked.send(true);

forked.on('message', (message) => {
   console.log('child process ended', message) 
});

forked.on('exit', () => {
  console.log('child finished')
  clearInterval(interval)
})

const interval = setInterval(() => {
process.stdout.write('.')
}, 200)
