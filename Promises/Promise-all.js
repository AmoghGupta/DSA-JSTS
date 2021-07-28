// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the 
// results of the input promises.

// This returned promise will resolve when all of the input's promises have resolved,

// It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, 
// and will reject with this first rejection message / error.


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((err)=>{
    console.log(err);
});
// expected output: Array [3, 42, "foo"]
