const fs = require('node:fs');
const { pipeline } = require('node:stream');
const { pipeline: pipelinePromise } = require('node:stream/promises');

const writable = fs.createWriteStream('./file');

const ac = new AbortController();
const signal = ac.signal;

async function* createIterator() {
  yield 'ivan';
  yield 'mujica';
  yield 'mamani';
}

const iterator = createIterator({ signal });

// Callback Pattern
pipeline(iterator, writable, (err, value) => {
  if (err) {
    console.error(err);
  } else {
    console.log(value, 'value returned');
  }
}).on('close', () => {
  ac.abort();
});

// Promise Pattern
/* pipelinePromise(iterator, process.stdout) */
  /* .then((value) => { */
  /*   console.log(value, 'value returned'); */
  /* }) */
  /* .catch((err) => { */
  /*   console.error(err); */
  /*   ac.abort(); */
  /* }); */
