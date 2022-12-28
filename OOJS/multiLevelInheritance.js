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

    helloWorldB(){
        console.log(this.prop2+' '+this.prop3);
    }
}

class C extends B{
    constructor(prop1, prop2, prop3,prop4){
        super(prop1,prop2,prop3);
        this.prop4 = prop4;
    }

}

let instanceofC = new C("prop1","prop2","prop3","prop4");
instanceofC.helloWorldB();


// HENCE IN REACT
// There is only one reason when one needs to pass props to super():
// When you want to access this.props in constructor.
