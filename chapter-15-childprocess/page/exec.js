const { exec } = require('child_process')

exec(`node -p "fs.readdir('.', (err, data) => console.log(data))"`, (err, stdout, stderr) => {
  if(err) {
    console.log('errr', err , stderr)
  }
  console.log(stdout)
})
