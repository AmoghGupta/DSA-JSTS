//Flattening an array. 
// Ex: Input : [[1, 2, 3], 4, [5, [6, 7]] Output: [1, 2, 3, 4, 5, 6, 7].


//solution 1
// using reduce and concat
[[1],[2,3],[2,6,7], [9,10,11]].reduce((a,b)=>{
    return a.concat(b)
})


// solution 2
//  using flat method
// flat(number of levels)
const arr1 = [1, 2, [3, 4]];
arr1.flat(); 
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

// Flatten 2 levels deep
const arr3 = [2, 2, 5, [5, [5, [6]], 7]];
arr3.flat(2);
// [2, 2, 5, 5, 5, [6], 7];

// Flatten all levels
const arr4 = [2, 2, 5, [5, [5, [6]], 7]];
arr4.flat(Infinity);