//Dynamic Programming
// Dynamic Programming is mainly an optimization over plain recursion. 
// Wherever we see a recursive solution that has repeated calls for same inputs, 
// we can optimize it using Dynamic Programming. The idea is to simply store the results of subproblems, 
// so that we do not have to re-compute them when needed later. 

// 0 1 1 2 3 5....

function fibonacci(n){
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

for(i=0;i<=4;i++){
    console.log("Fib sum: "+ fibonacci(i));
}
