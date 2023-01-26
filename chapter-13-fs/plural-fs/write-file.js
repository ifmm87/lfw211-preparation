const {error} = require('console');
const { writeFile, appendFile } = require('fs');

writeFile('./data.log', 'this is a test 333 \n', { flag : 'a' }, (error) => {
  if(!error) console.log('file created');
})
