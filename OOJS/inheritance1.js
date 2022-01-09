class B extends A {

}

// internally what happens?
// B.prototype = new A()
// A's constructor is attached to B's prototype