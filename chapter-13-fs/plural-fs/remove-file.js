const { writeFileSync, rm, unlink } = require('fs');
const FILE1 = 'test1.log'
const FILE2 = 'test2.log'

writeFileSync(FILE1, 'test 11');
writeFileSync(FILE2, 'test 22');

rm(FILE1, () => console.log('deleted'))
unlink(FILE2, () => console.log('deleted'))


