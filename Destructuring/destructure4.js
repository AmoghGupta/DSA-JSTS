// Use the spread operator to create shallow copies of objects and arrays.

let oldObject = {
    "key1":"value1",
    "key2":"value2",
    "key3":"value3"
};
const newObject = {...oldObject};


let oldArray = ["amogh",124,1.2];
const newArray = [...oldArray];

console.log(newObject);
console.log(newArray);
