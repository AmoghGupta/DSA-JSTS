// Given a Binary Tree, print left view of it.
// Left view of a Binary Tree is set of nodes visible when tree is visited from left side.
// Solution: 
// The left view contains all nodes that are first nodes in their levels. 
// A simple solution is to do level order traversal and print the first node in every level.
/*
         1
        / \
       2   3
      / \    
     4   5 
*/



var max_level = 0;

function levelOrderT(node,level){
    if(node == null){
        return;
    }
    if (max_level < level){
        max_level = level;
        console.log(node.data);
    }           
    this.levelOrderT(node.left, level+1);
    this.levelOrderT(node.right, level+1);
}

levelOrderT(BT.root,1);
