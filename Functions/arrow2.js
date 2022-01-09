// arrow functions don't have there own 'this' they inherit from the parent scope

// Normal function
let obj = {
    a:1,
    b:2,
    fun: function(){
        console.log(this.a);
    }
};

obj.fun(); //Output : 1
// ------------------------------------------------------------------------------------------------ //
// Arrow function

let obj2 = {
    a:1,
    b:2,
    fun: ()=>{
        console.log(this.a);
    }
};

obj2.fun(); //Output : undefined
// this.a here is trying to find variable in the parent scope i.e the global scope but 'a' doesnt exist hence undefined


var a = 'from global';
let obj3 = {
    a:1,
    b:2,
    fun: ()=>{
        console.log(this.a);
    }
};

obj3.fun(); //Output : 'from global'