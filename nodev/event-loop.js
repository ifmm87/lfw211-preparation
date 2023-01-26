const fs = require("fs");

// assume this operation takes a 2ms
fs.writeFile('./new-file.json', '...', function() {
    console.log('writeFile')
})

// assume this takes 10ms to complete
fs.readFile("./file.json", function(err, data) {
    console.log("readFile");
});

// don't assume, this actually takes 1ms
setTimeout(function() {
    console.log("setTimeout");
}, 1000);

// assume this operation takes 3ms
for(let i = 0; i < 10000000; i++) {}

setImmediate(function() {
    console.log("setImmediate");
});

// promise that takes 4ms to resolve
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        return resolve("promise after 4secs");
    }, 4000);
});
promise.then(function(response) {
    console.log(response)
})

console.log("last line");
