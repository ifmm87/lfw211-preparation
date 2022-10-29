console.log('initialized');
process.stderr.write(process.stdin.isTTY ? 'terminal\n' : 'piped to\n')
// console.log(process.stdin.isTTY ? 'terminal' : 'piped to')

process.stdin.pipe(process.stdout);

const { Transform } = require('stream');

const createUpperCaseStream = () => {
  return new Transform({
    transform(chunk, enc, next) {
      next(null, chunk.toString().toUpperCase());
    }

  })
}

const uppercase = createUpperCaseStream();

process.stdin.pipe(uppercase).pipe(process.stdout);
