//Backtracking
// If a set contains 'n' elements, then the number of proper subsets of the set is 2n - 1

function allsubsets(arr,subset,i){
    if(i == arr.length){
        console.log(subset);
        return;
    }else{
        subset[i] = '';
        allsubsets(arr,subset,i+1);
        subset[i] = arr[i];
        allsubsets(arr,subset,i+1);
    }
}

allsubsets([1,2],[],0)