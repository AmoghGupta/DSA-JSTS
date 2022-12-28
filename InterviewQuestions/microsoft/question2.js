// //Promise polyfill
// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Hello world");
//     },2000);
// });
// promise1.then((data)=>{
//     console.log(data);
// });

/** My Polyfill for promise function */ 
class MyPromise{
    constructor(resolve, reject, timer){
        this.resolve = resolve;
        this.reject = reject;
        this.timer = timer;
    }

    then = (cb)=>{
        // setTimeout(() => {
        //     cb(this.resolve());
        // }, this.timer);

        setTimeout(() => {
            cb(this.reject());
        }, this.timer);
    }
}

var callbackResolve = () => {return "hello I am resolved"};
var callbackReject = () => {return 'hello I am rejected' }; 

var mypromise2 = new MyPromise(callbackResolve,callbackReject,1000);
mypromise2.then((data)=>{
    console.log(data);
});