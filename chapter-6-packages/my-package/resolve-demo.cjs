'user strict';

console.log();
console.group('# package resolution');
console.log(`require('pino')`, '\t', '=>', require.resolve('pino'));
console.log(`require('standard')`, '\t', '=>', require.resolve('standard'));
console.groupEnd('============');

console.group('# directory resolution');
console.log(`require('.')`, '=>', require.resolve('.'));
console.log(`require('./my-package/')`, '=>', require.resolve('../my-package'));
console.groupEnd();
console.group('#file resolution');
console.log(`require('format.js')`, require.resolve('./format.js'));

console.group('# core apis resolution');
console.log(`require('fs')`, require.resolve('fs'));
