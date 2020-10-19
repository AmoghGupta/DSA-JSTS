// spread operator 
// Spread syntax (...) allows an ITERABLE such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
// or elements (for array literals) are expected, 
//or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

let myvar = null;
console.log({...myvar}); // {}
console.log([...myvar]); // myvar is not iterable 
console.log({...true}); // {}
// console.log({...{true}});
console.log({...{true:true}}) // {true:true}
console.log({...{...true}}); // {}
console.log({...100}); // {}

console.log([...1==1?[1,2]:'']); // [1,2]

console.log([...1==2?[1,2]:'']); // []
//========================================================================================
const cat = { legs: 4 };
const dog = {
    ...cat,
    sound: "woof"
};
console.log(cat); // { legs: 4 }
console.log(dog); // { legs: 4, sound: "woof" }