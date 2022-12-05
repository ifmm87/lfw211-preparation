function final(input, callback) {
  callback(`input touched by final function, ${input}`);
}
function middleware(input, callback) {
  return final(`some input ${input} touched by the middleware`, callback);
}
function iniciate() {
  const someInput = 1987;
  middleware(someInput, (result) => {
    console.log("result >>>", result);
  });
}

iniciate();
