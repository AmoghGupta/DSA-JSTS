//Backtracking: when the solution is to try all possibilities.
// its a method of exhaustive search using divide and conquer.

// generate all possible strings of n bits.
// example n=2 then 00,01,10,11

let arr=[];

function binarybits(n){
    if(n<1){
        console.log(arr.join(''));
    }else{
        arr[n-1]=0;
        binarybits(n-1);
        arr[n-1]=1;
        binarybits(n-1);
    }
}

binarybits(3);