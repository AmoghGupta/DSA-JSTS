// https://www.youtube.com/watch?v=u0e29JIdxZU

// Combinations 
// When the order doesn't matter, it is a Combination
// enhanced question can be to find only n digit combinations.. 

let arr = [1,2,3,4];
let count = 0;

function getAllsubsets(currentSubset,i,arr){
    // which means we are at the leaf node
    if(i === arr.length){
        // printing the leaf node
        count++;
        console.log(currentSubset);
        return;
    }
    getAllsubsets(currentSubset,i+1,arr);
    currentSubset.push(arr[i]);
    // in backtracking algo we revert the changes we do
    getAllsubsets(currentSubset,i+1,arr);
    currentSubset.pop();
}

getAllsubsets([],0,arr);
console.log("Total possible subsets: "+ count);


