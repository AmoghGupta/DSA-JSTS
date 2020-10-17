//cyclic rotation of all using recursion
let arr = [1,2,3];
function rotate(larr,d=1){
    let splitArray1 = larr.slice(0,d).reverse();
    let splitArray2  = larr.slice(d).reverse();
    let rotatedValue = splitArray1.concat(splitArray2).reverse();
    console.log(rotatedValue);
    if(arr.join('')==rotatedValue.join('')){
        return;
    }
    return rotate(rotatedValue);
}
rotate(arr);
