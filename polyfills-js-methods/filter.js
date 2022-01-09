Array.prototype.myfilter = function(callback) {
    arr = []
    for (var i = 0; i < this.length; i++) {
      if (callback.call(this, this[i])) {
        arr.push(this[i])
      }
    }
    return arr;
}

var ratings = [4,5,4.8,6];

console.log(ratings.myfilter(function(rating) {
    return rating > 4.9 
}));
  