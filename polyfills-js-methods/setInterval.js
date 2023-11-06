// setInterval polyfill
(function () {
    let intervalId = 0;
  
    function setIntervalPolyfill(callback, delay) {
      let start = Date.now();
      let intervalFunc = function () {
        if (Date.now() - start >= delay) {
          callback.call(null);
          start = Date.now();
        }
  
        intervalId = requestAnimationFrame(intervalFunc);
      };
  
      intervalId = requestAnimationFrame(intervalFunc);
      return intervalId;
    }
  
    window.setInterval = window.setInterval || setIntervalPolyfill;
})();