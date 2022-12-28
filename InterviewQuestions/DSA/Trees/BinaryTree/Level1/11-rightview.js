// Given a Binary Tree, print right view of it.
// Right view of a Binary Tree is set of nodes visible when tree is visited from right side.
// Solution: 
// We can keep track of level of a node by passing a parameter to all recursive calls. 
// The idea is to keep track of maximum level also. 
// And traverse the tree in a manner that right subtree is visited before left subtree. 
// Whenever we see a node whose level is more than maximum level so far, 
// we print the node because this is the last node in its level

/*
         1
        / \
       2   3
      / \    
     4   5 
*/

// Whenever we start with a new level - right should be read first .. simple!!

var max_level = 0;

function levelOrderT(node,level){
    if(node == null){
        return;
    }
    if (max_level < level){
        max_level = level;
        console.log(node.data);
    }   
    this.levelOrderT(node.right, level+1);
    this.levelOrderT(node.left, level+1);
    
}

levelOrderT(BT.root,1);

// 1,3,5