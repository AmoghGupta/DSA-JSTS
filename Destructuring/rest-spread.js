// ES6 has new feature three dots ...
//Here is how we can use these dots:

//1. As Rest/Collector/Gather:
var [c, ...m] = [1,2,3,4,5]; // m -> [2,3,4,5]

var c = 1,
m = [2, 3, 4, 5];


// ------------------------------------------------------------------//

//2. As Spread

var params = [ "hello", true, 7 ];
var other = [ 1, 2, ...params ]; // other => [1,2,"hello", true, 7]