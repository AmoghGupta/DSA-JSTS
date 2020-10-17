// using Set.protoype.delete(value) 
// creating set it contains 
// f, o , d, i, e 
var set1 = new Set("foooodiiiieee"); 
  
// deleting e from the set 
// it prints true 
console.log(set1.delete('e')); 
  
// set contains f, o, d, i 
console.log(set1); 
  
// deleting an element which is  
// not in the set 
// prints false 
console.log(set1.delete('g')); 