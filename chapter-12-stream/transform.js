const { createGzip } = require('zlib');

const transform = createGzip();
transform.on('data', data => console.log('got gzip data', data.toString('base64')));
transform.write('first');
transform.end('last');
transform.on('end', () => console.log('end'));
transform.on('finish', () => console.log('finish'));
setTimeout(() => {
  // transform.end('second');
  // transform.end('second');
}, 500);
