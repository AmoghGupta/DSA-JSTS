// This is a key/value structure. The key is a string and the value is a boolean

let map : { [key: string]: boolean} = {};
map["foo"] = true;
map["bar"] = false;
map.foo = true;
console.log(map);
//map["foobar"] = "foo"; // Throws exception
//map[1] = true; // Curiously doesn't throws exception