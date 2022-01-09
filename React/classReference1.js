class Sample1{
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    
    add(){
        console.log(this.a+this.b);
    }
}

let obj = new Sample1(1,2);
obj.add(); // works

let ref = obj.add;
ref(); //error: Cannot read properties of undefined (reading 'a')
// because we lost the context

//Solution
ref.bind(obj)()




