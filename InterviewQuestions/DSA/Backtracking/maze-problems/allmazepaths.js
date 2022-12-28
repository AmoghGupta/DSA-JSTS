// find all paths in a n*m matrix
// you can move either right or down starting from 0th cell

// 4*4 matrix
let count = 0;
function allPaths(n,m,path){
    if(n <= 3 && m <= 3){
        path.push([n,m]);
        // reached the destination
        if(n==3 && m==3){
            count++;
            console.log(path);
            path.pop();
            return;
        }
        allPaths(n+1,m,path);
        allPaths(n,m+1,path);
        path.pop();
    }
}

allPaths(0,0,[]);
console.log("All possible paths count is: "+count);
