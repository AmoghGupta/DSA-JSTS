// Sort an array in wave form

// Given an unsorted array of integers, 
// sort the array into a wave like array. An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..

// Solution is
// A Simple Solution is to use sorting. First sort the input array, 
// then swap all adjacent elements.

// For example, let the input array be {3, 6, 5, 10, 7, 20}. After sorting, 
// we get {3, 5, 6, 7, 10, 20}. 
// O/p: After swapping adjacent elements, we get {5, 3, 7, 6, 20, 10}.

let arr = [3, 6, 5, 10, 7, 20];
arr = arr.sort((a,b)=>a-b);
// 3, 5, 6, 7, 10, 20
for(let i=0;i<arr.length-1;i=i+2){
    let temp= 0;
    temp=arr[i];
    arr[i]=arr[i+1];
    arr[i+1]=temp;
}

console.log("Wave form: "+arr);


