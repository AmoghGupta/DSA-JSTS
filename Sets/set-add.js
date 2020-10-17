var set1 = new Set(); 
  
// set contains 10, 20 
set1.add(10); 
set1.add(20); 
  
// As this method returns 
// the set object hence chanining  
// of add method can be done. 
set1.add(30).add(40).add(50); 
  
// prints 10, 20, 30, 40, 50 
console.log(set1); 