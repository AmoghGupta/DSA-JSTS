// Best Time to Buy and Sell Stocks I


// Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (i.e, buy one and sell one share of the stock), design an algorithm to
// find the maximum profit.

// Return the maximum possible profit.

// let arr1 = [1, 4, 5, 2, 4]

let arr1 = [1, 2, 90, 10, 110];

// find max from backside 
// find min from front side which has occured before your max

let max = arr1[arr1.length-1];
let maxLeaders= [];
for(let i=arr1.length-1;i>=0;i--){
    if(arr1[i]>=max){
        maxLeaders.push(arr1[i]);
        max = arr1[i];
    }
}
//max value from last
lastMaxLeader = maxLeaders[maxLeaders.length-1];

let min = arr1[0];
let minLeaders = [];
for(let i=0;i<arr1.indexOf(lastMaxLeader);i++){
    if(arr1[i]<=min){
        minLeaders.push(arr1[i]);
        min = arr1[i];
    }
}

lastMinLeader = minLeaders[minLeaders.length-1];

let maxDifference = lastMaxLeader-lastMinLeader;
console.log(maxDifference)



// same problem is also asked as
// Maximum difference between two elements such that larger element appears after the smaller number