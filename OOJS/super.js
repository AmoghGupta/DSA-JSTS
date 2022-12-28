class A{
    constructor(prop1){
        this.prop1 = prop1;
    }
}

class B extends A {
    constructor(prop1, prop2, prop3){
        super(prop1);
        this.prop2 = prop2;
        this.prop3 = prop3;
        // if you want to access "this" here then you need super else you don't need super
        console.log(this.prop1);
    }

    testFun(){
        console.log(this.prop2+' '+this.prop3)
    }
}

let instance = new B("prop1","prop2","prop3");
instance.testFun();


// HENCE IN REACT
// There is only one reason when one needs to pass props to super():
// When you want to access this.props in constructor.
