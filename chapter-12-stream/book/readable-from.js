const { Readable } = require('stream');
async function* generate() {
  yield 'ivan';
  yield 'fernando';
  yield 'mujica';
  yield 'mamani';
  yield 'juancito';
  yield 'pinto';
}

const rStream = Readable.from(generate());

rStream.on('data', (chunk) => {
  console.log('the chunk', chunk);
});
rStream.on('end', () => {
  console.log('this is the end');
});
