const {exit} = require("process")

process.on('message', (message) => {
  if (message === true) {
    for (let i = 0; i < 9000000000; i++) {
    }
    process.send('finished!!!')
  }
  exit()
})
