// The cost of a stock on each day is given in an array, find the max profit that you can make by buying and selling in those days. 
// For example, if the given array is {100, 180, 260, 310, 40, 535, 695}, the maximum profit can earned by buying on day 0, 
// selling on day 3. Again buy on day 4 and sell on day 6. If the given array of prices is sorted in decreasing order, 
// then profit cannot be earned at all.

let sp = [7, 1, 5, 3, 6, 4 ];
// let sp = [4,2,2,2,4];
//let sp = [100, 180, 260, 310, 40, 535, 695];

let min = sp[0];
let initialProfit = 0;
let maxprofit = [];

for (let i = 1; i<sp.length; i++){
    if(sp[i] > min){
        if((sp[i] - min > initialProfit)){
            initialProfit= sp[i] - min;
        }
    }else{
        min = sp[i];
        initialProfit!=0 && maxprofit.push(initialProfit);
    }
}
maxprofit.push(initialProfit);
console.log(maxprofit.reduce((a, b) => a + b, 0));

