// WRITE A DEBOUNCER
// Debouncing will bunch a series of sequential calls to a function into a single call to that function. 
// It ensures that one notification is made for an event that fires multiple times.

// the original function be called after the caller stops calling the decorated function after a specified period.

// fire when the gap between two events is greater than "delay/n" seconds

//events:   | | | | | | |              | | | | | | | |
//function:             f()<--10ms-->f()

let counter =0;

const getData = ()=>{
    console.log("getting data "+ counter++);
};

const debouncerFunction = (cb, delay)=>{
    let timeout;
    return function(){
        let context = this,
        args= arguments;
        clearTimeout(timeout);
        timeout=  setTimeout(()=>{
            cb.apply(context, arguments)
        },delay)   
    }
};


const onSearch = debouncerFunction(getData,300);
// onSearch will be put in the HTML code

