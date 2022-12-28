// class Base {}; // some base class to keep the arrow functions simple
// var A = (superclass) => class A extends superclass
// var B = (superclass) => class B extends superclass
// var C = B(A(Base));
// var D = B(Base)


// base class
class A {  
    foo() {
      console.log(`from A -> inside instance of A: ${this instanceof A}`);
    }
}
  
  // B mixin, will need a wrapper over it to be used
const B = (B) => class extends B {
    foo() {
        if (super.foo) super.foo(); // mixins don't know who is super, guard against not having the method
        console.log(`from B -> inside instance of B: ${this instanceof B}`);
    }
};

// C mixin, will need a wrapper over it to be used
const C = (C) => class extends C {
    foo() {
        if (super.foo) super.foo(); // mixins don't know who is super, guard against not having the method
        console.log(`from C -> inside instance of C: ${this instanceof C}`);
    }
};

// D class, extends A, B and C, preserving composition and super method
class D extends C(B(A)) {  
    foo() {
        super.foo();
        console.log(`from D -> inside instance of D: ${this instanceof D}`);
    }
}

const inst1 = new D();
console.log(`Test D: extends A, B, C -> outside instance of D: ${inst1 instanceof D}`);
inst1.foo();

//Test D: extends A, B, C -> outside instance of D: true