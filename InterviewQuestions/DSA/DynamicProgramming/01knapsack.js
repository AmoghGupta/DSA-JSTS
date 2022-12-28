// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
// You cannot break an item, either pick the complete item or don’t pick it (0-1 property).

let val = [ 60, 100, 120 ];
let wt =  [ 10, 20, 30 ];
let W = 50;
let n = val.length;

function max(a, b){
    return (a > b) ? a : b;
}


function knapSack(W, wt, val, n){
    // Base Case
    if (n == 0 || W == 0){
        return 0;
    }
        
    // If weight of the nth item is more than Knapsack capacity W, then this item cannot be included in the optimal solution
    if (wt[n - 1] > W){
        return knapSack(W, wt, val, n - 1);
    }
        
    // Return the maximum of two cases:
    // (1) nth item included
    // (2) not included
    else{
        return max(val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1)  ,  knapSack(W, wt, val, n - 1));
    }      
}

console.log(knapSack(W, wt, val, n)); // 220

