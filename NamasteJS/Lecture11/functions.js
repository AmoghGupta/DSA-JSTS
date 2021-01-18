a(); // will work because of hoisting
b(); // wont work

// 1. function statement aka function declaration
function a(){
    console.log("a called")
}

// 2. function expression
var b = function (){
    console.log("b called")
}

// difference between function statement and function expression is hoisting

//------------------------------------------------------------------------------------------------------------------

// 3. anonymous function
// doesnt have there own identity, and dont have there own name
// anonymous functions are used when the functions are used as values

// function (){

// }

var x = function (a, b) {
    return a * b
};

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

// 4. Named function expression
var c = function xyz(){
    console.log("c called")
}
xyz() // error // reference error xyz is not defined // because xyz, its not created in global scope but created as a local variable
c() // will work

// 5. difference between params and args
var d = function (param1, param2){
    console.log("d called")
}
d(args1,args2);

//6. first class functions/citizens
// functions can be passed to another function as arguments, you can receive them as params 
// we can return a function from a function
// the ability to use functions a values is called functions.

//7. Arrow functions






