/*
         1
        / \
       2   3
      / \    
     4   5 
*/
/** SIMPLE BACKTRACKING */
// When faced with a choice, each possibility is explored recursively.
// After trying one choice and before trying the next, the program state is restored back to exactly 
// what it was before trying the first choice.

function printAllpaths(pathArr,node){
    // push each node data in array
    pathArr.push(node.data);

    // leaf node is whose left and right are null
    // path can be printed when we reach leaf node
    if(node.left == null && node.right == null){
        console.log(pathArr);
    }else{
        printAllpaths(pathArr,node.left);
        printAllpaths(pathArr,node.right);
    }
   
    // when we return from a node pop it from the array
    pathArr.pop();
}

printAllpaths([],BT.root);
// 1,2,4
// 1,2,5
// 1,3

// Question1: get all paths
// Question2: check if a given path exist or not. 
// example: 1,2,4 exists? True
// 1,2,3 exists? False