/*
         1
        / \
       2   3
      / \    
     4   5 
*/

// inOrder traversal
function inOrderT(node){
    if(node != null){
        this.inOrderT(node.left);
        console.log(node.data);
        this.inOrderT(node.right);
        
    }
}

inOrderT(BT.root); 
//4,2,5,1,3


