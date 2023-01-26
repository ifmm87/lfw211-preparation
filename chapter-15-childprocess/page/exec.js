const { exec } = require('child_process')

exec(`node -e "console.log('helloooo')"`, (err, stdout, stderr) => {
  console.log(err)
  console.log(stdout)
  console.log(stderr)
})
