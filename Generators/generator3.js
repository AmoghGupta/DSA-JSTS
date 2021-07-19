// we can write a function of the throttle.
// call a function after n seconds

window = {};
function * throttle(func, time) {
    let timerID = null;
    function throttled(arg) {
      clearTimeout(timerID);
      timerID = setTimeout(func.bind(window, arg), time);
    }
    while (true)
      throttled(yield);
  }
  
  const thr = throttle(console.log, 3000);
  
  thr.next(); // {value: undefined, done: false}
  thr.next('hello'); // {value: undefined, done: false} + 1s after -> 'hello'