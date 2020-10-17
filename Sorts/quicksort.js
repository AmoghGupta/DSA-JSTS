// make first element as pivot, make first as low and last as high
// i is low and j is high
// increment i until you find a number greater than pivot
// decrement j until you find a number smaller than pivot
// swap i and j

// while i<j and follows above algo
//[10,16,8,12,15,6,3,9,5,Number.POSITIVE_INFINITY]
//[10,5,8,12,15,6,3,9,16,Number.POSITIVE_INFINITY]
//[10,5,8,9,15,6,3,12,16,Number.POSITIVE_INFINITY]
//[10,5,8,9,3,6,15,12,16,Number.POSITIVE_INFINITY]

// once position of i crosses j
// swap pivot element i.e arr[low] with j element 
// and return j (which is the partition position)
//[6,5,8,9,3,10,15,12,16,Number.POSITIVE_INFINITY]

// now do the same for new subsets..

// worse O(n2)
 // O(log n) speed is a best-case/average time
 // divide and conquer



 let arr = [10,16,8,12,15,6,3,9,5,Number.POSITIVE_INFINITY];

 let low = 0;
 let high = arr.length-1;

function findPartitionKey(low,high){
    let pivot = arr[low];
    let i  = low;
    let j = high;
    while(i<j){
        do {
            i++;
        }
        while (arr[i] <= pivot);
    
        do {
            j--;
        }
        while (arr[j] > pivot);
    
        if(i<j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    let temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;
    
    return j;

}




function QuickSort(low,high){
    if(low<high){
        let j = findPartitionKey(low,high);
        QuickSort(low,j);
        QuickSort(j+1,high);
    }
}

QuickSort(low,high);
console.log(arr);