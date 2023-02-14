const { log } = require('console');
const { createReadStream } = require('fs');
const rs = createReadStream('../big-test-file.txt');

async function read () {
  for await(let chunk of rs) {
    console.log(chunk.toString())
  }
}

read();
