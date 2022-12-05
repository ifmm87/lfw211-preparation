const { createReadStream } = require('fs')
const rs = createReadStream('../big-test-file.txt');

rs.on('readable', () => {
  let data = rs.read();
  while (data !== null) {
    console.log('Read chunk', data.toString());
    data = rs.read();
  }
});

rs.on('end', () => {
  console.log('No more data');
})
