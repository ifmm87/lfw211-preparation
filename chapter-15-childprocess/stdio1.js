const { spawn } = require('child_process');
const sp = spawn(process.execPath, ["-e", `console.log('aaaaaa');`], {
  stdio: ["inherit", "inherit", "inherit"],
});
 
// sp.stderr.pipe(process.stdout);
// sp.stdin.write('this will be an input');
// sp.stdin.end();
