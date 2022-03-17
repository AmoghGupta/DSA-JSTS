//  intersection in array.

const arr1  = new Set([2,4,6,7,8,1,13]);
const arr2 = new Set([2,14,13,4,7,8]);


arr1.filter((key)=>{return arr2.includes(key)});