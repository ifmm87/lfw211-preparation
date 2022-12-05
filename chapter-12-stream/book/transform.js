const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const file = createReadStream('../big-test-file.txt');

const ts = () => {
  return new Transform({
    transform(chunk, enc, done) {
      
      done(null, chunk.toString().toLowerCase());
    },
  });
};
const stream = ts();
// file.pipe(stream).pipe(createWriteStream('../big-test-file-case-changed.txt'))
// file.pipe(stream).pipe(process.stdout);
pipeline(file,stream, process.stdout, (err) => {
  console.log('error', err )
})
