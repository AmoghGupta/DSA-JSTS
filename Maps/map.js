// Map is a collection of elements where each element is stored as a Key, value pair. 
// Map object can hold both objects and primitive values as either key or value. 
// When we iterate over the map object it returns the key,value pair in the same order as inserted.


// The key difference is that Objects only support string keys. Where as Maps support more or less any key type.
// An Object has a prototype, so there are default keys.

// Map is an instance of Object (surprise surprise!), but Object is definitely not an instance of Map.
// A Map is ordered and iterable, whereas a objects is not ordered.
// If I do obj[123] = true and then Object.keys(obj) then I will get ["123"] rather than [123]. 
// A Map would preserve the type of the key and return [123] which is great. Maps also allow you to use Objects as keys. 

//Again, despite all the advantages Map can have against Object, 
// there is still cases Object will perform better. After all, Object is the most basic concept of Javascript

//Object is the great choice for scenarios when we only need simple structure to store data and knew that all the keys are either 
// strings or integers (or Symbol), because creating plain Object and accessing Object’s property with a specific key is much faster 
// than creating a Map

// map1 contains  
// 1 => 2 
// 2 => 3 
// 4 -> 5 
var map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]); 
  
console.log("Map1"); 
console.log(map1); 

// map2 contains  
// firstname => sumit 
// lastname => ghosh 
var map2 = new Map([["firstname" ,"sumit"],  
        ["lastname", "ghosh"]]); 
  
console.log("Map2"); 
console.log(map2); 

//SET
map1.set("website", "geeksforgeeks") 
// "first name" => "sumit" 
// "last name" => "ghosh" 
// "website" => "geeksforgeeks" 

// HAS
// retuns true 
console.log("map1 has website ? "+  map2.has("website")); 

// GET
// returns geeksforgeeks 
console.log("get value for key website "+ map2.get("website"));


// ENTRIES
// getting all the entries of the map 
// it prints 
// ["first name", "sumit"] 
// ["last name", "ghosh"] 
// ["website", "geeksforgeeks"] 
var get_entries = map2.entries(); 
  
  
//KEYS
// getting all the keys of the map  
var get_keys = map2.keys(); 
// it prints 
// "first name", "last name",  
// "website"

//VALUES
// getting all the values of the map 
var get_values = map2.values();

// DELETE
console.log("delete element with key website " + map2.delete("website"));

// CLEAR
map2.clear(); 



// Quesiton.
var a = new Map();
a.set(['x','y'], 1);
console.log(a.get(['x','y'])); //undefined

//Fix
var a = new Map(); 
var key = ['x', 'y'];
a.set(key, 1);
console.log(a.get(key));
// Explanation:
// Understand that ES2015 Map keys are compared (almost) as if with the === operator. 
// Two array instances, even if they contain the same values, do not ever compare as === to each other