var globalVar = "xyz";

function outerFunction(outerArg) {
  var outerVar = 0;
  return function innerFunction(innerArg) {
    var innerVar = 'times';
    outerVar ++;
    console.log( `${globalVar} ${outerVar} ${innerVar}, with ${outerArg} and ${innerArg}`)
  }
}

const func = outerFunction('Ivan');
func('Mujica');
func('Mamani');
func();
func();
