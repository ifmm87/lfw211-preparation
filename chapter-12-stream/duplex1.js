const net = require('net');
net.createServer(socket => {
  const interval = setInterval(() => {
     socket.write('something \n');
  }, 1000)
  socket.on('connection', () => {
    socket.write('connected');
  });
  socket.on('data', data => {
    socket.write(data.toString().toUpperCase());
  });
  socket.on('end', _ => {
    clearInterval(interval);
  });
}).listen(3000, () => console.log('The socket is up.'));
