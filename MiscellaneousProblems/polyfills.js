// how are polyfills written in JS

function logicCallbackFunction(inp){
    return inp*inp;
}

Array.prototype.myMap = function(cb){
    const arr = [];
    for(let i=0;i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr;
}


console.log([2,4,7,8].myMap(logicCallbackFunction));