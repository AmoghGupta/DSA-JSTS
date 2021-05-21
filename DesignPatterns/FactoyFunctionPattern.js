// The factory function pattern is similar to constructors, 
// but instead of using new to create an object, factory functions simply set up and 
// return the new object when you call the function.

const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const jeff = personFactory('jeff', 27);
  
  console.log(jeff.name); // 'jeff'
  
  jeff.sayHello(); // calls the function and logs 'hello!'