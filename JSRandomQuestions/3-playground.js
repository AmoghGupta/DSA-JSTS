/** easy peasy debounce */
/** until the user waits for N(delay) the function wont be executed no matter how many times the function is called */

// let timeout;
// let delay = 3000;
// function hi(){
//     console.log('hi');
// }
// function debounce(cb){
//     clearTimeout(timeout);
//     timeout = setTimeout(cb,delay);
// }
// debounce(hi);
// debounce(hi);
// debounce(hi);

/** easy peasy throttle */
/** if the differnce between last function call and the next function call is "n" seconds then only make a function call */


// let tdelay = 3000;
// let flag = true;
// let count = 0;

// function hi(){
//     console.log('hi');
// }
// function throttle(cb){
//     if(flag){
//         cb();
//         flag = false;
//         setTimeout(()=>{
//             flag = true;
//         },tdelay);
//     }
// }

// setInterval(() => {
//     throttle(hi);
// }, 1000);