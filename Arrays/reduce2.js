//reducing an array into an object

const fruits = ['apple','orange','apple','banana'];

const tally = fruits.reduce((accumulator,fruit)=>{
    if(accumulator[fruit]){
        accumulator[fruit]++;
    }else{
        accumulator[fruit] = 1;
    }
    return accumulator;
},{});

console.log(tally);
// { apple: 2, orange: 1, banana: 1 }