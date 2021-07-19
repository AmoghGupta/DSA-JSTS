// Here’s a simple analogy ✍️
// Imagine you are reading an action book, and suddenly your doorbell rings.
// This is the pizza guy. You get up. however, before you do, you set a bookmark on the last page you read. 
// Once you return, you start the book from the page where you set the bookmark. 
// You don't start it from scratch. In a sense, you acted as a func of a generator.


// Essentially, generators are functions that you can use to control the iterator. 
// They can be suspended and later resumed at any time.

function* mygenerator(){
    console.log("invoked 1st item");
    yield 1;
    console.log("invoked 2nd item");
    yield 2;
    console.log("invoked 3rd item");
    yield 3;
} 

const mygen = mygenerator();

console.log(mygen.next());
console.log(mygen.next());
console.log(mygen.next());


console.log(mygen.next());