// Use .bind() when you want that function to later be called with a certain context

var person = {  
    name: "James Smith",
    hello: function(thing) {
      console.log(this.name + " says hello " + thing);
    }
}
  
person.hello("world");  // output: "James Smith says hello world"
var helloFunc = person.hello.bind({ name: "Jim Smith" });
helloFunc("world");  // output: Jim Smith says hello world"