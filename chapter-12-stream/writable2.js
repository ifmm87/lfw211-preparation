
const { Writable } = require('stream');
const data = [];
const createWritableStream = (data = []) => {
    return new Writable({
      decodeStrings: true,
      write(chunk, encoding, callback) {
        data.push(chunk);
        callback();
      }
    })
}
const wStream = createWritableStream(data);
// process.stdin.pipe(wStream);
/* wStream.write('Ivan \n'); */
/* wStream.write('Fernando \n'); */
/* wStream.write('Mujica \n'); */
/* wStream.write('Mmani \n'); */
/* wStream.end('Last chunk'); */
process.stdin.on('data', (data) => {
  // console.log('something is piping', '-'+data.toString() + '-', data.toString() === 'end')
  if (data.toString() === 'end\n') {
    wStream.end('last chunk!!');
  } else {
    wStream.write(data);
  }
})
wStream.on('finish', () => {
  console.log('All done', Buffer.concat(data).toString());
})

