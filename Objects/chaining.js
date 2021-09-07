// object chaining

let obj = {
    func1(){
        console.log("Func 1");
        return this;
    },
    func2(){
        console.log("Func 2");
        return this;
    },
    func3(){
        console.log("Func 3");
        return this;
    },
}

obj.func1().func2().func3();