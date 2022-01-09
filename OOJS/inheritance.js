function Person(name, age) {
    this.name = name;
    this.age = age;
}
const me = new Person('Joe', 20);
Person.prototype.greet = function() {
    console.log('Hi', this.name);
}  
me.greet(); // Hi Joe
const you = new Person('Alice', 22);
you.greet(); // Hi Alice


function Employee(name, age, title) {
    // similar to super
    Person.call(this, name, age);
    this.title = title;
}
// create Employee prototype from Person prototype (immediate step)
// we are using Object.create so that Employee.prototype doesnt refer to same instance
Employee.prototype = Object.create(Person.prototype);

// now you can add Employee class specific functions
Employee.prototype.employeefun = function(){
    console.log(this.title);
}
// now Employee.prototype has both Persons methods and its own employeefun method

const joe = new Employee('Joe', 22, 'Developer');
console.log(joe.name); // Joe
joe.greet(); // Hi Joe
joe.employeefun();  //Developer