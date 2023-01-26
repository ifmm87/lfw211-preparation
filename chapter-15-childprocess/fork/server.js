const { fork } = require('child_process');

const forked = fork('./child.js');

forked.send('hi there child')
forked.on('message', (data) => {
  if(data.end) forked.kill();
  console.log(data);
})
