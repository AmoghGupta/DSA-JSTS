// Solution

class Sample1{
    constructor(a,b){
        this.a = a;
        this.b = b;
        //fixed
        this.add = this.add.bind(this);
    }
    
    add(){
        console.log(this.a+this.b);
    }
}

let obj = new Sample1(1,2);

let ref = obj.add;
ref();





