//Backtracking
// When the order doesn't matter, it is a Combination. When the order does matter it is a Permutation.
// that means in permutations duplicates will occur
// while combinations are unique

// Question: print all permutations of an Array

//https://www.youtube.com/watch?v=JMxl5rk7kGo&list=PLKKfKV1b9e8pWy_UIiJlOlX_T4al_UtQJ&index=3&ab_channel=ApniKaksha

let counter = 0;
function swap(arr,l,i){
   let temp = arr[l];
   arr[l]= arr[i];
   arr[i] =temp;
   return arr;

}

function permute(arr,l,r) { 
    if (l == r){
        counter = counter+1;
        console.log("P: "+arr); 
    } else{ 
        for (let i = l; i <= r; i++){
            arr = swap(arr,l,i);
            permute(arr, l+1, r); 
            arr = swap(arr,l,i); 
        } 
    } 
} 

// let inputArr = ['a','b','c'];
// let inputArr = [1,2,3];
let inputArr = [0,1,0,1,0];
permute(inputArr,0,inputArr.length-1);
console.log("Count: "+counter);