// Selection sort using Recursion

// Find the minimum element in arr[0...4]
// and place it at beginning
// or
// Find the max element in arr[0...4]
// and place it at the end



// 25,12,22,11,   64;
// 12,22,11     25,64
// 12,11,   22,25,64
// 11   12,22,25,64
// 11,12,22,25,64

let arr = [64,25,12,22,11];
let length = arr.length-1;
let max = arr[0];

function recursionSort(arr,l,r){
    if(l == r){
        return;
    }
    if(arr[l]>arr[l+1]){
        max = arr[l];
        arr[l] = arr[l+1];
        arr[l+1]=max;
    }else{
        max = arr[l+1];
    }
    recursionSort(arr,l+1,r);
}

for(i=0;i<=arr.length-1;i++){
    recursionSort(arr,0,length-i);
}
console.log(arr);




