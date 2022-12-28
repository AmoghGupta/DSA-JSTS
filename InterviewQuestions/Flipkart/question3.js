// Q: Write a function which will take array of multiple functions and execute them in left to right fashion

// Difficulty: medium

// Ex: customFn([ fn1,fn2,fn3 ]) should run fn1 first and then fn2 and fn3

const fun1 = ()=>{
    console.log("hi from function 1");
}

const fun2 = ()=>{
    console.log("hi from function 2");
}
const fun3 = ()=>{
    console.log("hi from function 3");
}

const arr = [fun1, fun2, fun3];

const cbFun = (cb)=>{
    cb();
}

arr.forEach((item)=>{
    cbFun(item);
})

