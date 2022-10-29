const { spawn } = require('child_process');
const sp = spawn(process.execPath, ["-e", `console.log('aaaaaa'); process.stdin.pipe(process.stdout)`], {
  stdio: ["pipe", "pipe", "pipe"],
});
sp.stdout.pipe(process.stdout);
sp.stderr.pipe(process.stdout);
sp.stdin.write('this will be an input');
sp.stdin.end();
