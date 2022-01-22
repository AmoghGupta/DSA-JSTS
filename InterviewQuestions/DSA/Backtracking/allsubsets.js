// https://www.youtube.com/watch?v=u0e29JIdxZU

// Combinations 
// When the order doesn't matter, it is a Combination
// enhanced question can be to find only n digit combinations.. 

let arr = [3,1,2,3];
let count = 0;

function getAllsubsets(currentSubset,i,arr){
    // which means we are at the leaf node
    if(i === arr.length){
        // printing the leaf node
        count++;
        console.log(currentSubset)
        return;
    }
    currentSubset.push(arr[i]);
    getAllsubsets(currentSubset,i+1,arr);
    currentSubset.pop();
    getAllsubsets(currentSubset,i+1,arr);
    
}

getAllsubsets([],0,arr);
console.log("Total possible subsets: "+ count);


