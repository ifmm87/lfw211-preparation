const net = require('net');
const socket = net.connect(3000);

socket.on('data', data => {
  console.log('got data', data.toString(), '\n');
});

socket.write('hello');
socket.write('hello');
setTimeout(() => {
  socket.write('all done')
  setTimeout(() => {
    socket.end()
  }, 250)
}, 6350)
