let arr = {};
arr.toString()
// O/p is "[object Object]"


var obj = {a:"1"};
var obj1 = {b:"2"};

obj[obj1]=obj1;
// when trying to set another object as key, it will convert the object toString  key '[object Object]' and set this as key
// { a: '1', '[object Object]': { b: '2' } }

var obj2 = {c:"3"};
obj[obj2]= obj2;
// again you trying to set object as key so it will override the same '[object Object]' key, doesnt matter if its a new object

console.log(obj);
// { a: '1', '[object Object]': { c: '3' } }
