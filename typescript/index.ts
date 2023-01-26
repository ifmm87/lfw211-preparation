console.log('somthing')
let nombre = "Ivan";

console.log(nombre, typeof nombre)


let specificallyAda: "Ada";
specificallyAda = "Ada"; // Ok
//specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.
let someString = ""; // Type: string
// specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.
let nameMaybe = Math.random() > 0.5
    ? "Tony Hoare"
    : undefined;
console.log('>>>>>>>>>>>', typeof nameMaybe)
console.log(nameMaybe?.toUpperCase())


const poet = {
    born: 1935,
    name: "Mary Oliver",
};
poet['born']; // Type: number
console.log(poet.name); // Type: string
// console.log(poet.end); // error
//
//
let arr = ['h', 'j'];
// arr.push(true); //infiere el tipo de dato cuando lo inicializas
// arr.push('string');
// arr.push(1);
console.log(arr)

console.group('Narrowing - assignment');
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
console.log(admiral, typeof admiral)
admiral = 89;
console.log(admiral, typeof admiral)
// admiral.toFixed();
console.groupEnd();

console.group('structural typing');
type WithFirstName = {
  firstName: string;
};
type WithLastName = {
  lastName: string;
};
const hasBoth = {
  firstName: "Lucille",
  lastName: "Clifton",
  add: true,
};
console.log(typeof hasBoth);
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName: WithFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName: WithLastName = hasBoth;
