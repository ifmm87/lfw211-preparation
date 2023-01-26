function MyError() {
  Error.captureStackTrace(this, MyError)
}

console.log(new MyError().stack);
