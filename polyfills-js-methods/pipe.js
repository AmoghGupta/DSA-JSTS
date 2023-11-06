
const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const reverse = (string) => string.split('').reverse().join('');


const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

console.log(pipe(getName, uppercase, reverse)({ name: 'Buckethead' }));


// compose is opposite of pipe we just pass the functions in reverse order
// i.e console.log(componse(reverse,uppercase,getName)({ name: 'Buckethead' }));


// explanation
// pipe = (...functions) => (value) => {
//     debugger;
//     return functions.reduce((currentValue, currentFunction) => {
//          debugger;
//          return currentFunction(currentValue);
//     }, value)
// }