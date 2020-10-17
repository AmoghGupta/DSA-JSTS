// Iterable protocol: 
// 1. The object must define a method with ‘Symbol.iterator’ 
// 2. The key which returns an object which itself follows iterator protocol. The object must define ‘next’ method.
// 3. Next method which returns an object having two properties ‘value’ and ‘done’


//Create our own iterable object:
// for of is used with iterators

var iterable = { 
    i: 0, 
    [Symbol.iterator]() { 
      var that = this; 
      return { 
        next() { 
          if (that.i < 5) { 
            return { value: that.i++, done: false } 
          } else { 
            return { value: undefined, done: true } 
          } 
        } 
      } 
    } 
  } 
    
for(let value of iterable){
    console.log(value)
} 