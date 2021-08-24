// Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. 
// Most of the OOP languages provide access modifiers to restrict the scope of a variable, 
// but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object. 

// Abstraction example
function person(fname,lname){
    
    //private
    let firstname = fname;
    //private
    let lastname = lname;
  
    //private
    let getDetails_noaccess = function(){
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }
  
    //public
    this.getDetails_access = function(){
        return (`First name is: ${firstname}, Last 
            name is: ${lastname}`);
    }
}
let person1 = new person('Mukul','Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());