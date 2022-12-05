const { fork } = require('child_process')
const forked = fork('child.js');
forked.on('message', (message) => {
  console.log('message from child', message)
})

forked.send('initiate child process');
forked.on('error forking', error => console.log(error))
