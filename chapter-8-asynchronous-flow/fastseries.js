const { readFile } = require('fs');
const fastseries = require('fastseries');

const files = Array.from(Array(3)).fVill(__filename);

const print = (err, contents) => {
  if(err) {
    console.error(err);
    return;
  }
  console.log(contents.toString());
}

const readers = files.map(file => {
  
})
