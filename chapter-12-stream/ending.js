const net = require('net');
const { finished } = require('stream');

net.createServer(socket => {
  const interval = setInterval( _ => {
    socket.write('somethingaaaaa');
  }, 1000)
  socket.on('data', data => {
    socket.write(data.toString().toUpperCase());
  });
  finished(socket, err => {
    if (err) console.log('there was an error');
    console.log('end')
    clearInterval(interval);
  })
}).listen(3001, _ => console.log('server is upjjjj'));

