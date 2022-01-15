let arr = [];
function getBinary(num){
    if(num === 0){
        return;
    }
    arr.push(num%2);
    getBinary(Math.floor(num/2))

}

getBinary(233);
console.log(arr.reverse());