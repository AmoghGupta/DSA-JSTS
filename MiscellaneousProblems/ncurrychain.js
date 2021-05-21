// add(1)(2)(3)(4)...(n)

prevParam = [];
function add(x){
    prevParam.push(x);
    if(prevParam.length === 3){
        return prevParam.reduce((a, b) => a + b, 0)
    }
    return add;
}

console.log(add(1)(2)(3));