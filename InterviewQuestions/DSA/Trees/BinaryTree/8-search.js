/*
         1
        / \
       2   3
      / \    
     4   5 
*/

// The idea is to use tree traversals to traverse the tree and 
// while traversing check if the current node matches with the given node.
let found = false;
function searchTree(node,key){
    if(node == null){
        return;
    }
    if(node && node.data == key){
        found= true;
        return;
    }
    if(node != null){
        this.searchTree(node.left,key);
        this.searchTree(node.right,key);
    }
}

searchTree(BT.root,3);
console.log(found?"Found":"Not found");