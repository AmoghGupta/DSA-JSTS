// The 'for await...of' statement creates a loop iterating over async objects and sync objects such as arrays, array-like objects, maps sets, etc.


const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, 'foo');
});


async function test() {
    try{
        var iterables = [promise1,promise2,promise3];
        for await (variable of iterables) {
            console.log(variable);
        }
    }catch(e){
        console.log(e);
    }
  
}

test();

console.log("testing for await in JS")