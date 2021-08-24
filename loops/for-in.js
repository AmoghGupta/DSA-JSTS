// The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), 
// including inherited enumerable properties.


// for...in is built for iterating object properties, not recommended for use with arrays,

// loops through the "properties" of an object
var person = {fname:"John", lname:"Doe", age:25, somedata:[2,4,5]};
for (let i in person) {
    console.log(i +" is "+ person[i] );
}

//output
// fname
// lname
// age
// somedata