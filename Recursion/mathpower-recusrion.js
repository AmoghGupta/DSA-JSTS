// 1. base case ==> simplest possible input for this function
// 2. find relation ==> how the larger problem can be solved with the help of the solution of the smaller problem
// 3. generalise - put all this in a mathematical function or tree.


// find power a^b using recursion
// 2^4
// a^0 is 1 and  a^1 is a
// 2^4 = 2^3 * 2^1
// a^b => a^(b-1)*a^1 => a^(b-1)*a


function power(a,b){
    if(b == 0){
        return 1;
    }


    return power(a,b-1)*a;
}

console.log(power(2,4));