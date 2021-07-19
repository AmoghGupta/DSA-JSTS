// Array is by default iterable. 
// Also, String, Map & Set are built-in iterables because their prototype objects all have a Symbol.iterator() method.

const array = ['a', 'b', 'c']; 
  
const it = array[Symbol.iterator](); 

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

