'use strict';
const pino = require('pino');
const formatter = require('./format');

const logger = pino();
logger.info(formatter.upper('my package has started'));
process.stdin.resume();
console.log('>>>>', require.main)
if (require.main === module) {
  const logger = pino();
  import('./format.mjs').then(formatter => {
    logger.info(formatter.upper('lets get down the business'));
    process.stdin.resume();
  }).catch( error => {
    console.log(error);
    process.exit(1);
  });
} else {
  let formatter = null;
  const reverseAndUpper = async (str) => {
    formatter = formatter || await import('./format.mjs');
    return formatter.upper(str).split('').reverse().join('');
  }
  module.exports = reverseAndUpper;
}

/* import { realpath } from 'fs/promises'; */
/* import url from 'url'; */
/* import * as format from './format.js'; */
/*  */
/* const isMain = process.argv[1] && await realpath(url.fileURLToPath(import.meta.url)) === await realpath(process.argv[1]); */
/* if (isMain) { */
/*   const { default: pino } = await import('pino'); */
/*   const logger = pino(); */
/*   logger.info(); */
/*   logger.info(format.upper('my-package started')); */
/*   process.stdin.resume(); */
/* } */
/*  */
/* export default (str) => { */
/*   return format.upper(str).split('').reverse().join(''); */
/* } */
