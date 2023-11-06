// Use .call() or .apply() when you want to invoke the function immediately, and modify the context.
// apply is similar to call except that it takes an array-like object instead of listing the arguments out one at a time.

function personContainer() {
    var person = {  
       name: "James Smith",
       hello: function() {
         console.log(this.name + " says hello " + arguments[1]);
       }
    }
    person.hello.apply(person, arguments);
}
personContainer("world", "mars"); // output: "James Smith says hello mars", note: arguments[0] = "world" , arguments[1] = "mars"  