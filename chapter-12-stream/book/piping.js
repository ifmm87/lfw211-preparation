const { createReadStream } = require('fs')
const rs = createReadStream('../big-test-file.txt');

rs.pipe(process.stdout);
