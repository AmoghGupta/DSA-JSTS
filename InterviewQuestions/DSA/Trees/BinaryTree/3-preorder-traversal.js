/*
         1
        / \
       2   3
      / \    
     4   5 
*/

// preOrderTraversal
function preOrderT(node){
        if(node != null){
            console.log(node.data); 
            this.preOrderT(node.left);
            this.preOrderT(node.right);
        }
}

preOrderT(BT.root); //1,2,4,5,3


