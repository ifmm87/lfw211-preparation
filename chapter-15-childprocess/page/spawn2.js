const { spawn } = require('child_process');
const child = spawn('wc');

process.stdin.pipe(child.stdin);
child.stdout.on('data', (data) => console.log('>>>>', data.toString()))
child.on('exit', (code) => { console.log('exit from child', code)})
child.on('close', (code) => { console.log('close from child', code)})
child.on('message', (data) => { console.log('message', data)})
child.on('spawn', (data) => { console.log('spawn succesfully', data)})
child.on('error', (data) => { console.log('error succesfully', data)})
