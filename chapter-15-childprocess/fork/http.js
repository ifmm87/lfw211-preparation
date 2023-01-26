const http = require('http');
const { fork } = require('child_process');
const server = http.createServer();
server.on('request', (req, res) => {
    if(req.url === '/compute') {
      const sumForked = fork('./long-sum.js');
      sumForked.send('start')
      sumForked.on('message', sum => {
        res.end(` the sum is ${sum}`);
      })
    } else {
      res.end('OK normal request')
    }
})

server.listen(2000, () => console.log('server is up'))
