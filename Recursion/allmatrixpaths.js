// 1. base case ==> simplest possible input for this function
// 2. find relation ==> how the larger problem can be solved with the help of the solution of the smaller problem
// 3. generalise - put all this in a mathematical function or tree.

//https://www.youtube.com/watch?v=AqHoXqOgctU&ab_channel=ApniKaksha

// find all paths in a n*m matrix
// you can move either right or down starting from 0th cell

//base case if you are on nth row or mth column then there is only 1 way t reach the path.
// smaller problem will become f(n-1,m) + f(n,m-1)

function allPaths(n,m){

    if(n==1 || m==1){
        return 1;
    }

    return allPaths(n-1,m)+ allPaths(n,m-1);
}

console.log(allPaths(4,4));
