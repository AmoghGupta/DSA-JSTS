let counter = 0;
function swap(arr,l,i){
   let temp = arr[l];
   arr[l]= arr[i];
   arr[i] =temp;
   return arr;
}

function permute(arr,l,r) { 
    // we print the leaf node
    if (l == r){
        counter = counter+1;
        console.log("P: "+arr); 
    } 
    for (let i = l; i <= r; i++){
        // fix i and swap 
        arr = swap(arr,l,i); //abc //bac //cba
        permute(arr, l+1, r); //acb //bca //cab
        // fix i and swap again to revert to original state while travesing back (in backtracking problems we )
        arr = swap(arr,l,i); //abc //bac //cba
    } 
} 

let inputArr = ['a','b','c'];
permute(inputArr,0,inputArr.length-1);
console.log("Count: "+counter);
