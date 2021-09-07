
// This method checks whether all the array elements satisfy the condition provided by a method passed as the argument. 
// This method will return true if all the elements pass the set. If an element is found not to satisfy the condition, the method returns false

let arr =  [1,6,7];

console.log(arr.every((elem)=>{
    return elem >4;
}));