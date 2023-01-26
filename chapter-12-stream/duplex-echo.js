const { Duplex } = require('stream');

const dstream = new Duplex({
  write(chunk, enc, done) {
    console.log('chunk>>>>>', chunk.toString())
    done()
  },

  read(size) {
    if (this.charNumber > 100)
      this.push(null)
    else
    this.push(String.fromCharCode(++this.charNumber));
  }
})
dstream.charNumber = 64;
dstream.pipe(process.stdout)
