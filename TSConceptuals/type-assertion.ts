//Type assertion allows you to set the type of a value and tell the compiler not to infer it. 
//there are two ways to do type assertion in TypeScript:

let code: any = 123; 
let employeeCode = <number> code; 

// or

let code1: any = 123; 
let employeeCode1 = code1 as number;