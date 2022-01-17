 //find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 // LOGIC:
 // fix ith element one by one and then keep adding preceding elements one by one 
 // update the max when the new sum is greater than old max
 
 const maxSubArray = (nums) => {
    let max = -Infinity;
    for(let i=0; i<nums.length; i++){
        let maxsubArr = [];
        let sum = nums[i];
        maxsubArr.push(nums[i]);
        for(let j=i+1;j<nums.length;j++){
            maxsubArr.push(nums[j]);
            sum = sum + nums[j];
            if(sum >max){
                max = sum;
                console.log(maxsubArr +' and sum is '+max);
            }
        }
    }
    return max;
}   

const nums = [-2, -3, 4, -1, -2, 1, 5, -3]; //answer is 7
// [-3, -4, 5, -1, 2, -4, 6, -1] is 8
// [-2, 3, -1, 2] is 4

console.log("Answer is: "+ maxSubArray(nums));