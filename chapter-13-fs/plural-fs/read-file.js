const { readFile } = require('fs');

readFile(`${__dirname}/really-big-file.json`, (err, data) => {
  console.table(JSON.parse(data))
})
