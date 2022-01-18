//Backtracking: when the solution is to try all possibilities.
// its a method of exhaustive search using divide and conquer.

// generate all possible strings of n bits.
// example n=2 then 00,01,10,11

let numberOfBits = 2;

function binarybits(n,arr){
    //reached leaf node
    if(n == numberOfBits){
        console.log(arr.join(''));
        return;
    }
    arr[n]=0;
    binarybits(n+1,arr);
    arr[n]=1;
    binarybits(n+1,arr);
}

//passing empty array for backtracking purpose and printing it at leaf node
binarybits(0,[]);