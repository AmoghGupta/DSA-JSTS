
let arr = [1,2,3];
let sum = 0;

function recursum(arr,index){

    if(index== arr.length){ // 3 ==3
        return;
    }
    sum = sum + arr[index];
    recursum(arr,index+1);

}

recursum(arr,0);
console.log(sum);
