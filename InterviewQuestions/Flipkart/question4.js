// Q: Write a custom function which will take array of multiple async functions and execute them in left to right fashion

// Difficulty: hard

// Ex: customFn([ fn1,fn2,fn3 ]) should run fn1 first and then fn2 and fn3

const fun1 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("func 1");
        },1000);
    });
}

const fun2 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("func 2");
        },2000);
    });
}
const fun3 = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("func 3");
        },3000);
    });
}

const arr = [fun1, fun2, fun3];

const cbFun = async(cb)=>{
    let val = await cb();
    console.log(val);
}

arr.forEach((item)=>{
    cbFun(item);
})

