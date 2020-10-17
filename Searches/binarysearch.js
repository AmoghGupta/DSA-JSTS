// binary search is done on a sorted array always

// divide and conquer
// divide the problem into sub problems and solve it
// Average performance	O(log n)

let arr = [10,20,30,40,50,60];
let key = 150;

function binarySearch(arr,key,start,end){
    let mid = Math.floor((start+end)/2);
    if(mid<start || mid>end){
        console.log("Not found");
        return;
    }
    
    if(key < arr[mid]){
        binarySearch(arr,key,start,mid);
    }

    if(key > arr[mid]){
        binarySearch(arr,key,mid+1,end);
    }
    if(key === arr[mid]){
        console.log("found");
        return; 
    }
    
}


binarySearch(arr,key,0,arr.length-1);