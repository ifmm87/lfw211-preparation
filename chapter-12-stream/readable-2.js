const {Readable} = require('stream');
const { createReadStream } = require('fs');

const stream = createReadStream('./big-test-file.txt');

/* stream.on('data', (chunk) => { */
  /* console.log('received data', chunk.length, ' bytes') */
  /* stream.pause(); */
  /* console.log('the stream is paused:', stream.isPaused()) */
  /* setTimeout(() => { */
  /*   console.log('Now data is paused until....') */
  /*   stream.resume(); */
  /* }, 2000) */
  /* console.log('chunk', chunk); */
/* }) */

/* stream.on('readable', () => { */
  /* // let data = stream.read(); */
  /* console.log(`readable: ${stream.read()}`) */
/* }) */

/* async function run () { */
/*   for await(const chunk of stream) { */
/*     console.log('chunk', chunk) */
/*   } */
/* } */
/*  */
/* run() */
/*  */


async function * generator() {
  yield 'jose';
  yield 'sarita';
  yield 'rosi'
}
const rstream = Readable.from(generator());
rstream.on('data', (chunk) => {
  console.log('chunk', chunk)
})

stream.on('end', () => console.log('this is the end'))
