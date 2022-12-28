// An object can only have one prototype. 
// Inheriting from two classes can be done by creating a parent object as a combination of two parent prototypes.
// The syntax for subclassing makes it possible to do that in the declaration, 
// since the right-hand side of the extends clause can be any expression. 
// Thus, you can write a function that combines prototypes according to whatever criteria you like, and 
// call that function in the class declaration.

// In JavaScript we can only inherit from a single object. 
// There can be only one [[Prototype]] for an object. And a class may extend only one other class.



// But sometimes that feels limiting. For instance, we have a class StreetSweeper and a class Bicycle, 
// and want to make their mix: a StreetSweepingBicycle.

// There’s a concept that can help here, called “mixins”.

// a mixin is a class containing methods that can be used by other classes without a need to inherit from it.

// mixin
let sayHiMixin = {
    sayHi() {
      alert(`Hello ${this.name}`);
    },
    sayBye() {
      alert(`Bye ${this.name}`);
    }
  };
  
  // usage:
  class User {
    constructor(name) {
      this.name = name;
    }
  }
  
  // copy the methods
  Object.assign(User.prototype, sayHiMixin);
  
  // now User can say hi
  new User("Dude").sayHi(); // Hello Dude!

  // There’s no inheritance, but a simple method copying. So User may inherit from another class and 
  // also include the mixin to “mix-in” the additional methods, like this:

  class User extends Person {
    
  }
  
  Object.assign(User.prototype, sayHiMixin);

