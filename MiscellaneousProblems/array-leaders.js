// An element is leader if it is greater than all the elements to its right side. 
// And the rightmost element is always a leader. For example int the array {16, 17, 4, 3, 5, 2}, leaders are 17, 5 and 2.

// method1 n*n (bad approach 2 loops)

// method 2 (Scan from right)
// Scan all the elements from right to left in an array and keep track of maximum till now. 
// When maximum changes its value, print it.
var arr1 = [16, 17, 4, 3, 5, 2];
let max = arr1[arr1.length-1]; //2
for(let i=arr1.length-1;i>=0;i--){
    if(arr1[i]>=max){
    console.log("Leader "+arr1[i])
        max = arr1[i];
    }
}