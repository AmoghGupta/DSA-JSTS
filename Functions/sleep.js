// how to write a sleep function in JS?

const sleep = function(timer){
    return new Promise((resolve)=>{
        setTimeout(resolve,timer)
    });
} 

async function sleepMethod(){
    console.log("Sleep start "+ new Date());
    await sleep(4000);
    console.log("Sleep end "+ new Date());
}

sleepMethod();