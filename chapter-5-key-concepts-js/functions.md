### functions
first class citizens, a function is a object
- a function can be returned from a function
- a function can be passed as an argument
- a function can be assigned to a object property

### when a function is assigned to a object,
`this` word whitin a the function refers to the object on which function was called

It's crucial to understand that this refers to the object on which the function was called, not the object which the function was assigned to:

When defined without curly braces, the expression following the fat arrow (=>) is the return value of the function.
Lambda functions do not have their own this context, when this is referenced inside a function, it refers to the this of the nearest parent non-lambda function

see this.js


Normal functions have prototype property

```
function normalFunction () { }
const fatArrowFunction = () => {}
console.log(typeof normalFunction.prototype) // prints 'object'
console.log(typeof fatArrowFunction.prototype) // prints 'undefined'
```
