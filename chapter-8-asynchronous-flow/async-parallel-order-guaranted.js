function doSomethingAsynchronous(num, cb) {
  setTimeout(() => {
    cb(null, num * 2)
  }, Math.ceil(Math.random() * 1000))
}

function run () {
  const data = [3,4,3,6,5,100];
  const results = [];
  let filled = data.length;
  data.forEach((item, index) => {
    doSomethingAsynchronous(item, (err, numDouble) => {
      results[index] = numDouble;
      filled--;
      if (!filled) console.log('>>>',results);
    });
  });
}
run();
