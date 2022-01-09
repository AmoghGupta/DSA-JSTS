class B extends A {

}

// internally what happens?
// A's prototype is attached to B' prototype
// B.prototype = Object.create(A.prototype);