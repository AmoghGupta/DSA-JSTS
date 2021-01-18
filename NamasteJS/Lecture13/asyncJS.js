// JS is synchronous single threaded lang
// it has one call stack
// can do one thing at a time
// this callstack is present inside the JS engine
// all the code is exeucted in callstack

// when a program is run a Global Execution Context is created.
// this GEC is pushed to stack
// now the code executes
// now when a function invocation happens for any function, execution context is created for that particular function
// and this execution context is pushed to stack again
// similary if any functions are there for them also EC is created and pushed to stack
// then the code for that particular executes and pops from stack
// and program ends at the end one GEC is done


//Now comes ASYNC JS part
// if any code takes time since JS is single threaded then it might block the JS code from executing and the EC for that particular function might get stuck
// as a result all the other code will remain stuck in stack. (BLOCKING THE MAIN THREAD)


// hence whenever a async operation happens its callback is registered and handled separately from the main thread
// and as an when that async operation completes the callback function is put to call stack to execute.

// all code exeuctes in call stack only doesnt matter sync or async.

// now if there are multiple async items happening then a queue is maintained called the CALLBACK or TASK QUEUE where as an when an 
// async operation completes, it callback function is stored in queues in that order FIFO and from this queue the callback function 
// is picked and executed in the call stack one by one. This process is called EVENT LOOP. (because this process keeps on checking the queue for any new
// async callback function to be exeucted)

// Similar to callback queue we have MICROTASK QUEUE which has higher priorty
// functions inside MICROTASK QUEUE are executed first.
// All callbacks which come through promises are placed inside MICROTASK QUEUE and hence given more priority.

// MUTATION OBSERVERS
// this keeps on checking whethere there is any manipulation in DOM tree or not, if there is some mutation in DOM tree then it can exeucte some
// callback function

// promises and MUTATION OBSERVERS are placed inside MICROTASK QUEUE

// STARVATION of the callback queue is when  MICROTASK QUEUE has lots of tasks in queue and doesnt give chance to CALLBACK QUEUE.