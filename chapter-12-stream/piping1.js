// const net = require('net');
// const socket = net.connect(3000);
// // socket.on('data', data =>  console.log('log data', data.toString()));
// socket.pipe(process.stdout)
// socket.write('hello from client');
// setTimeout(() => {
//   socket.write('all done')
//   setTimeout(() => {
//     socket.end()
//   }, 250)
// }, 3250)

const net = require('net');
const { Transform } = require('stream');
const { pipeline } = require('stream/promises');
const { scrypt } = require('crypto');
const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: 'hex',
    transform (chunk, enc, next) {
      scrypt(chunk, 'a-salt', 32, (err, key) => {
        if (err) { next(exx); return; }
        next(null, key)
      })
    }
  });
}

net.createServer(socket => {
  const transform = createTransformStream();
  const interval = setInterval( _ => socket.write('beat \n'), 1000);
  pipeline(socket, transform, socket)
    .then(value => { 
      console.log('value returned', value)
      clearInterval(interval);
    })
    .catch((err) => {
    if (err) { console.error ('error', err)}
    });

}).listen(3000);
