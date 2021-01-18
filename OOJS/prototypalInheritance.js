// in terms of JS Inheritance is
// one object trying to access methods and properties of another object.

// prototype is a hidden OBJECT which JS engine attaches to your object,
// so whenever u create an object JS engine automatically attaches your object with hidden properties
// and functions(hidden object).


// with functions also, these get access to some properties and methods..
// function are also kind of object in JS.

// to get access to those properties and methods 
// using "__proto__" you can get access to all the hidden properties and methods 

let arr = ["HELLO", "WORLD"];
console.log(arr.__proto__); // what methods and properties it inherited 
Array.prototype // what methods and properties this class has
arr.__proto__ === Array.prototype // true
//------------------------------------------------------------------------------------------------------------//

let object  = {
    name: "Amogh",
    city: "Hyderabad",
    getIntro: function(){
        console.log(this.name + "from" + this.city);
    }
}
Object.prototype === object.__proto__; //true

let object2  = {
    name: "Eishu"
}

// Never do this
object2.__proto__ = object;
// prototypal inheritance happened
object2.city // Hyderabad
//------------------------------------------------------------------------------------------------------------//

Function.prototype.mybind  = function(){
    console.log("hello world");
}

function fun(){

}

function fun2(){
    
}

fun.mybind();






