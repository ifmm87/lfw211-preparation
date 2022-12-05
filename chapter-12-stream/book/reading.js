const { Readable } = require('stream');
const data = ['aaaa', 'bbbbb', 'cccccc', 'dddddd'];

const createReadStream = () => {
  return new Readable({
    read(size) {
      if (data.length) {
        this.push(data.shift())
      } else {
        this.push(null);
      }
    }
  });
}
const rs = createReadStream();
rs.on('end', () => {
  console.log('this is the end')
})
rs.on('data', (data) => {
  console.log('data', data.toString())
})

rs.on('error', (error) => {
  console.log('error', error)
})
