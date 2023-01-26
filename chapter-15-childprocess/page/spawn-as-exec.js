const { spawn } = require('child_process');

const child = spawn('find $DIR -type f && echo $DIR ', {
  stdio: ['inherit', 'pipe', 'inherit'],
  shell: true,
  env : { DIR: '/home/ivan/Downloads/'}
});

child.stdout.on('data', data => console.log(data.toString()))
// child.stderr.on('data', data => console.log('errorrrr>>>> ',data.toString()))

