process.report.filename = 'output.json'

console.profile('MyLabel');

console.assert(true, 'nothing');
console.assert(false, ' ups false');

console.count();
console.count('default');
console.count('default');
console.count('abc');
console.count('xyz');
console.count('abc');
console.count('abc');
console.count('abc');
console.count('abc');
console.count();
console.countReset('abc');
console.count('abc');

console.dir({ data: 'data' });
console.dirxml({ data: 'data' });


console.group('test');
console.log('1 test');
console.log('2 test');
console.log('3 test');
console.groupEnd();
console.log('4 test');
//
//
console.time('process');
for (var i = 1; i < 1000000; i += 1) { }
console.timeLog('process', 'End 1º loop');
for (let i = 1; i < 1000000; i += 1) {}
console.timeEnd('process');
//
//
// console.trace('Mesage!');
//
// [>
//  This method does not display anything unless used in the inspector,
//  adds an event with the label 'label' to the Timeline panel of the inspector.
//  */
//
//
// Adds the profile 'MyLabel' to the Profiles panel of the inspector.
console.profile('MyLabel');
console.log('some code')
debugger;
console.timeStamp('timestamp');
console.profileEnd('MyLabel');

/* console.time('tableeee') */
/* const obj = []; */
/* for (let i = 0; i < 10; i++) { */
/*   obj.push({ name: 'name'  + i, age: i}) */
/* } */
/* // console.table(obj) */
/* console.timeEnd('tableeee') */
process.stdout.resume();
