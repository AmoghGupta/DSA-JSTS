//JS numbers are  64-bit floating point..floating point maths might not be accurate..  
// to solve this either convert all to integers by multiplication and then do the division again to get the result bac

let v = (0.1 + 0.2) * 10;
console.log(v);

// 3.0000000000000004

//solution


let v = ((0.1*10 + 0.2*10) * 10)/10;
// 3