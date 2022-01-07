// Write a program that, given an array A[] of n numbers and another number x, 
// determines whether or not there exist two elements in S whose sum is exactly x.

//Input: arr[] = [0, -1, 2, -3, 1]
// find pair whose sum is -2
// Output: -3, 1

 
//Solution1 is n*n  (bad approach) using 2 loops
//------------------------------------------------------------------------------------------------

//Solution 2 O(n)
//Hashing technique
console.log("*************HASHING TECHNIQUE***************");
let arr = [1, 4, 45, 6, 10, 8];
//convert array to map
let mymap = new Map();
arr.forEach((elem)=>{
    mymap.set(elem,null)
});
let sum = 16;
for (let key of  mymap.keys()) {
    let j = sum - key;
    mymap.has(j)?mymap.set(key,j):''
}
console.log(mymap.entries());

//------------------------------------------------------------------------------------------------------

// Solution 3 is 0(nlogn)
// Sorting and Two-Pointers technique.
// first sort increasing order then have 2 pointers one at start and one at end
// if startpointer+endpointer>sum then decrement end pointer

console.log("************* 2 POINTER TECHNIQUE***************");
let arr1 = [1, 4, 45, 6, 10, 8];
let sum1 = 16; 
arr1 = arr1.sort((a,b)=>a-b); //this sorting should be nlogn
let sp=0;
let ep = arr1.length-1;
for(let i=0;i<arr1.length;i++){
    if(arr1[i]+arr1[ep] == sum1){
        console.log(arr1[i],arr1[ep]);
    }
    if(arr1[i]+arr1[ep]>sum1){
        ep = ep-1;
    }
    if(arr1[i]+arr1[ep]<sum1){
        sp=sp+1;
    }
}