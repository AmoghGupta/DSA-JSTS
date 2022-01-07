//Backtracking

//When the order doesn't matter, it is a Combination. When the order does matter it is a Permutation.
// that means in permutations duplicates will occur
// while combinations are unique

//Question: Print all possible combinations of r elements in a given array of size n
// Solution Name is: Fix Elements and Recur

let counter = 0;
let allCombinations =[];
function combinationUtil(arr,data,start,end,index,r) {
    if (index == r) { 
        counter = counter+1;
        allCombinations.push(data.join(','));
        return; 
    } 
    for (let i=start; i<=end; i++){ 
        //fixing
        data[index] = arr[i]; 
        combinationUtil(arr, data, i+1, end, index+1, r); 
    } 
} 

let arr = [1, 2, 3, 4,5]; 
let r = 3; //combination size 
let n = arr.length; 
let data=[]; 
combinationUtil(arr, data, 0, n-1, 0, r); 
console.log("Count: "+counter);
console.log(allCombinations);
