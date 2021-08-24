// This method copies the part of the given array with its own elements and returns the modified array. 
// It copies elements of an array from within the same array. This method will never add more items to the array.

let arr = [1,2,5,4,3];


// to the 2nd index item add the 4th index item
arr.copyWithin(2,4)
// [1,2,3,4,3]