//------------------------------------------Inheriting properties------------------------------------------------------------------//

// Let's create an object o from function F with its own properties a and b:
let F = function(){
    this.a = 1;
    this.b = 2;
}

let o = new F(); // {a: 1, b: 2}
 
// add properties in F function's prototype
F.prototype.b = 3;
F.prototype.c = 4;

console.log(o.a); // 1
console.log(o.b); // 2
console.log(o.c); // 4
console.log(o.d); // undefined
//------------------------------------------Inheriting "methods"------------------------------------------------------------------//

var o = {
    a: 2,
    m: function() {
      return this.a + 1;
    }
  };
  
console.log(o.m()); // 3
// When calling o.m in this case, 'this' refers to o

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // creates a property 'a' on p
console.log(p.m()); // 5

  //------------------------------------------------------------------------------------------------------------//