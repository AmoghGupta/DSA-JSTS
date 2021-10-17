var a = {};
var b = {key: 'b'};
var c = [1,2,3];
var d = {key: 'c'};
var e = function(){};

// object will convert everything to string keys

a[b] = 111; // {[object Object]:111}
a[c] = 222; // {[object Object]:111, '1,2,3':222}
a[d] = 333; // {[object Object]:333, '1,2,3':222}
a[e] = 444; // {[object Object]:333, '1,2,3':222, function(){}:444}
console.log(a[b]); ///333
console.log(a[c]); ///222
console.log(a[d]); /// 333
console.log(a[e]); ///444


// (function(){}).toString()
//O/p is "function(){}"

//[1,2,3].toString()
//"1,2,3"