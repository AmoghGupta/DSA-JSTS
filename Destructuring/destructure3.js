//destructure an object into variables

const obj = {
    a: 1,
    b:'2',
    c:'hello'
};
// spreading object into variables (make sure variable names matches the keys)
let {a,b} = {...obj}

// spreading array into variables
const arr = [1,2,3];
let [d,e,f,g] = [...arr,4];