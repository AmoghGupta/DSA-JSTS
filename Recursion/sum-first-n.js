// find sum of first n natural numbers
// f(5)= 1+2+3+4+5
// f(1) =1 
// f(5) = f(4)+5
// f(n) = f(n-1) +n

function firstNNatualNumbers(n){
    if(n === 1){
        return 1;
    }

    return firstNNatualNumbers(n-1)+n;
}

console.log(firstNNatualNumbers(5));