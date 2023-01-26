const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh8']);

ls.stdout.on('data', (data) => {
  console.log('stdout: ', `${data}`);
})

ls.stderr.on('data', err => {
  console.log('the error', err.toString())
})

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`)
})
