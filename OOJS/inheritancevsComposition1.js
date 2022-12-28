// INHERITANCE

// The typical properties of various objects are used to form relationships with each other. 
// The abstract and common attributes are stored in the superclass, which is available to the more specific subclasses.

// In this example, using classes, Liv can do tricks, and harry can swim, but because liv and harry are magicians and they 
// inherit from Person, you can’t avoid that Liv do tricks and that Harry can swims.

class Person  {
    eat() {
        console.log('I am eating');
    }
    breathe(){
        console.log('I am breathing');
    }    
    swim(){
        console.log('I am swimming');
    } 
}
class Magician  extends Person{
    trick() {
        console.log('I am doing a trick');
    }
}
let liv= new Magician();
let harry = new Magician();
//Liv can:
liv.eat();
liv.breathe();
liv.swim();
liv.trick();
//I am eating
//I am breathing
//I am swimming
//I am doing a trick
//Harry can:
harry.eat();
harry.breathe();
harry.swim();
harry.trick();
//I am eating
//I am breathing
//I am swimming
//I am doing a trick