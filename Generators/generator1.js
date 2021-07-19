// This is a GeneratorFunction. It is essentially a factory 
// for creating new Generators. 
const myGeneratorFunction = function*() { 
    yield 'hello'; 
    yield 'world'; 
  }; 
   
// This is a Generator, which, as defined above, conforms to 
// the iterator protocol, so it has a `next()` method. 
const myGenerator = myGeneratorFunction(); 

// Because myGenerator is also an iterator, we get to use the 
// nice for...of syntax: 
for(const word of myGenerator) { 
console.log(word); // 'hello' 'world' 
} 