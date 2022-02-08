// converting an array into object

let myarray = ["amogh",124,1.2];
let xyz = {...myarray};

console.log(xyz);

// {0: 'amogh', 1: 124, 2: 1.2}



// but vice versa is not true

let obj = {0: 'amogh', 1: 124, 2: 1.2};
let abc = [...obj]; //error: obj is not an iterable

