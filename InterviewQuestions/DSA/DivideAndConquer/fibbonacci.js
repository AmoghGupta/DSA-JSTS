function sumFibonacci(n){
    if(n == 0 || n == 1){
        return n;
    }
    return sumFibonacci(n-1) + sumFibonacci(n-2);
};

console.log(sumFibonacci(5));