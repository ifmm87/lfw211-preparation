const { Readable, Writable } = require('stream')
process.stdin.pipe(process.stderr)
