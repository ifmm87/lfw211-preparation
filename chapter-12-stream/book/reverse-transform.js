const { Transform } = require('stream');
const reverse = (str) => {
  if (!str || !str.length) return null;
  return str.split('').reverse().join('');
};

const tStream = new Transform({
  transform(chunk, enc, done) {
    done(null, reverse(chunk.toString()));
  }
})

process.stdin
  .pipe(tStream)
  .on('data', (data) => console.log(data.toString()))
  .pipe(process.stdout);
