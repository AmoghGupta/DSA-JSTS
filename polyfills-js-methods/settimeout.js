// This polyfill works by using requestAnimationFrame to delay the execution of the callback until the specified delay has passed.

// setTimeout polyfill
(function () {
    let timeoutId = 0;
  
    function setTimeoutPolyfill(callback, delay) {
      let start = Date.now();
      let timeoutFunc = function () {
        if (Date.now() - start >= delay) {
          callback.call(null);
        } else {
          timeoutId = requestAnimationFrame(timeoutFunc);
        }
      };
  
      timeoutId = requestAnimationFrame(timeoutFunc);
      return timeoutId;
    }
  
    window.setTimeout = window.setTimeout || setTimeoutPolyfill;
})();
