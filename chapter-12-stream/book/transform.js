const { Transform, pipeline } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const file = createReadStream('../big-test-file.txt');

const tstream = new Transform({
  transform(chunk, enc, done) {
    done(null, chunk.toString().toUpperCase())
  }
})
// process.stdin.pipe(tstream).pipe(process.stdout)
tstream.on('data', (chunk) => {
  console.log('>>>>>', chunk)
})
pipeline(file, tstream, process.stdout, (err) => {
  console.log(err)
})
