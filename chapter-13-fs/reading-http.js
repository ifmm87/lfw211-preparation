const { opendir, readdir } = require('fs');
const { createServer } = require('http');
const { Readable, Writable, Transform, pipeline } = require('stream')
const createEntryStream = () => {
  return new Transform({
    writableObjectMode: true,
    readableObjectMode: false,
    transform(entry, enc, next) {
      next(null, `${entry.name}`);
    },
    final(cb) {
      this.push('\n\n');
      cb();
    }
  });
}

createServer((req, res) => {
  opendir(__dirname, (err, dir) => {
    // if (err) .......
    const dirStream = Readable.from(dir);
    const entryStream = createEntryStream();

    res.setHeader('Content-Type', 'application/json');
    pipeline(dirStream, entryStream, res, (err) => {
      if (err) console.log(err);
    })
  });

}).listen(3000, () => console.log('server was initiated..'));

