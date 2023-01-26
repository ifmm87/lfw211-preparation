// console.log('hello world from app \n');
// console.log('another greting from app');

function sum (...args) {
  const [ a, b ] = args;
  if(!b) {
    return function (b) {
      return a + b;
    }
  } else {
    return a + b;
  }
}
console.log(sum(4)(6))
console.log(sum(4,6))
