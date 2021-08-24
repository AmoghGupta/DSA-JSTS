// Defining object
// An Object is a unique entity which contains property and methods.

// The characteristics of an Object are called as Property, in Object Oriented Programming and the actions are called methods. 

let person = {
    first_name:'Mukul',
    last_name: 'Latiyan',
  
    //method
    getFunction : function(){
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }
}
console.log(person.getFunction()); 
console.log(person.phone_number.landline);