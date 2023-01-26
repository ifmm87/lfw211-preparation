const { createWriteStream } = require('fs');

const stream = createWriteStream('./really-big-file.json', 'utf8');
const MAX_LINES = 100000;
stream.write('[');
for(let i = 0 ; i < MAX_LINES; i++) {
  stream.write(JSON.stringify({ name: 'lorem' + i, lastName: 'ipsum' + i }))
  if(i < MAX_LINES - 1) stream.write(', \n');
}
stream.write(']');
stream.close();
