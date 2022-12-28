// Sliding Window Median
// https://leetcode.com/problems/sliding-window-median/

// Example 1:

// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
// Explanation: 
// Window position                Median
// ---------------                -----
//  [1  3  -1] -3  5  3  6 7        1
//  1 [3  -1  -3] 5  3  6  7       -1
//  1  3 [-1  -3  5] 3  6  7       -1
//  1  3  -1 [-3  5  3] 6  7        3
//  1  3  -1  -3 [5  3  6] 7        5
//  1  3  -1  -3  5 [3  6  7]       6


const nums = [1,3,-1,-3,5,3,6,7]; 
const k = 3;

function sort(arr){
    return arr.sort((a,b)=> a-b);
};

function printMedian(extractedArray, windowLength){
    let medianIndex;
    if(windowLength %2 == 0){
        let ind1 = Math.floor(windowLength/2);
        let ind2 = Math.floor(windowLength/2) +1;
        medianIndex = extractedArray[ind1] + extractedArray[ind2];
    }else{
        medianIndex = (windowLength/2 +1);
    }
    medianIndex = Math.floor(medianIndex);
    console.log(extractedArray[medianIndex-1]);
}

function slidingWindow(nums, k){
    let slider = 3;
    for(let i= 0; i <= nums.length -k; i++){
        let extractedWindow ;
        if(i == 0){
            extractedWindow = nums.slice(0,k);
        }else{
            slider = slider +1;
            extractedWindow =  nums.slice(i,slider);
        }
        printMedian(sort(extractedWindow),3);
    }    
}

slidingWindow(nums, k);