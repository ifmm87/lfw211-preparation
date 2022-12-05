const zlib = require('zlib');
const { createWriteStream, createReadStream } = require('fs')
const [,, file] = process.argv;
createReadStream(file)
  .pipe(zlib.createGzip())
  .on('data', (chunk) => console.log('>'))
  .pipe(createWriteStream(`${file}.zip`))
  .on('finish', () => console.log('finished!!!'))


