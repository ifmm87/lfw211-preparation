const { log } = require('console');
const { createReadStream } = require('fs');
const rs = createReadStream('../big-test-file.txt');

async function run() {
  for await (const chunk of rs) {
    log('read chunk', chunk.toString());
  }
  console.log('no more data');
}

run();
