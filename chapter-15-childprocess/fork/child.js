process.on('message', (data) => {
  console.log('message', data.toString());
})
const LIMIT = 10;
let counter = 0;
setInterval(() => {
  counter++
  if (counter < LIMIT )
    process.send({ message: 'hello from child ' + counter })
  else
    process.send({ end: true })
}, 1000);
