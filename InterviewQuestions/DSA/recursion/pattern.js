// pattern without using any loop

// Input: n = 16
// Output: 16, 11, 6, 1, -4, 1, 6, 11, 16

let flag=false;
let startN = 16;

function myfun(n,r){
    console.log(n);
    if( n<=0){
        flag=true;   
    }
    if(flag && n==startN){
        return;
    }
    
    !flag?myfun(n-r,r):myfun(n+r,r);
}


myfun(startN,5);
