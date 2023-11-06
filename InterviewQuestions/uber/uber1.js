// Implement a throttler that executes an array of tasks. 
// When the throttler is passed a number, only execute that number of the tasks and passes the other tasks into a queue.


function print(i){
    console.log(i);
}

function throttler(tasks=[], num=0){
    for(const task of tasks){
        // execute
        if(num-- > 0){
            task();
        }else{
            // put in queue
            setTimeout(task, 0);
        }
    }
}

throttler(
    [
    print.bind(null, 1),
    print.bind(null, 2), 
    print.bind(null, 4), 
    print.bind(null, 6)
    ],
    2
);