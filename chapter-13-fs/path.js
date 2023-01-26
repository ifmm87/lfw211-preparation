'use strict';
const { parse, basename, dirname, extname, isAbsolute, resolve } = require('path')
console.log('>>>>>>>>>>>', __filename)
console.log('filename parsed:', parse(__filename))
console.log('filename basename:', basename(__filename))
console.log('filename dirname:', dirname(__filename))
console.log('filename extname:', extname(__filename))
console.log('filename isAbsolute:', isAbsolute(__filename))
console.log('filename abs:', resolve(__filename))
