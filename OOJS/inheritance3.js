// Same thing happens in JS
// Array Class inherits from Object Class which inherits from null
// hence when we create an array instance from Array class 
// it gets all the properties and methods from both Array and Object class

// Lets assume this is Object Class
class MyObject{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    myobjFun(){
        console.log(this.a + this.b);
    }
}
// Lets assume this is Array Class which extends from Object Class
class MyArray extends MyObject{
    constructor(a,b,c){
        super(a,b);
        this.c = c;
    }
    myarrFun(){
        console.log(this.a+this.b+this.c);
    }
}

let arr = new MyArray(1,2,3);
arr.myobjFun();
arr.myarrFun();







