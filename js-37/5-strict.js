'use strict';
const myObj = {
  foo: 'bar',
  func : () => {
    console.log(this)
  }
}
myObj.func();
