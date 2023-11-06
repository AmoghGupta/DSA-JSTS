// THROTTLING -- rate limiter
// Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

// fire events after a fixed amount of seconds
// if the differnce between last function call and the next function call is "n" seconds then only make a function call

//events:    | | | | | | | | | | | | | | | | | | | | |
//function:  f()<--10ms-->f()<--10ms-->f()<--10ms-->f()

const expensive= ()=>{
    console.log("expensive method");
}

const throttle = (cb, limit)=>{
    let flag = true;

    return function(){
        let context = this;
        args= arguments;
        if(flag){
            cb.apply(context,args);
            flag = false;
            setTimeout(()=>{
                flag = true;
            },limit);
        }
    }

}


const betterExpensive = throttle(expensive,500);