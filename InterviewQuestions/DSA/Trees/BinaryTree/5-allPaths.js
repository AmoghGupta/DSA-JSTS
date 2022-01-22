/*
         1
        / \
       2   3
      / \    
     4   5 
*/
/** SIMPLE BACKTRACKING */
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
    // pop data from array while backtracking
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