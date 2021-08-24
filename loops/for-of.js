// The for...of statement creates a loop iterating over iterable objects, 
// including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.

// loops through the values of an "iterable" object
var person = ['a', 'b', 'c'];
for (let i of person) {
    console.log(i);
}


//output
// a
// b
// c

const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}

//output
// b
// o
// o