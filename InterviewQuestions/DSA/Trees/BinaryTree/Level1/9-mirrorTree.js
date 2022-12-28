// Find mirror tree of a given tree 

// Mirror of a Binary Tree T is another Binary Tree M(T) with 
// left and right children of all non-leaf nodes interchanged. 

/*
         1
        / \
       2   3
      / \    
     4   5 
*/
// Mirror is 
/*
         1
        / \
       3   2
          / \
         5   4
    
*/

function mirror(node){
    if(node == null){
        return node;
    }
    let left = mirror(node.left);
    let right = mirror(node.right);
    /* swap the left and right pointers */
    node.left = right;
    node.right = left;

    return node;
}

mirror(BT.root);