// 'use strict'
// const { spawnSync } = require('child_process')
// const result = spawnSync(
//   process.execPath,
//   ['-e', `console.log('subprocess stdio output')`]
// )
// console.log(result.stdout.toString())

'use strict'
const { exec } = require('child_process')
const sp = exec(
  `"${process.execPath}" -e "console.log('subprocess stdio output')"`
)

console.log('pid is', sp.pid)

sp.stdout.pipe(process.stdout)

sp.on('close', (status) => {
  console.log('exit status was', status)
})

