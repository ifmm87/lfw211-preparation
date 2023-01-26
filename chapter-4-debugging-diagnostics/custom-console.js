const { Console } = require('console');
const { createWriteStream } = require('fs');
const output = createWriteStream('./stdout.log');
const error = createWriteStream('./stderr.log');
const logger = new Console({
  stdout: output,
  stderr: error,
  colorMode: true,
});
const count = 66;
logger.log('count', 66);
console.log('asdfsafdsa');
logger.error('this is an error')


