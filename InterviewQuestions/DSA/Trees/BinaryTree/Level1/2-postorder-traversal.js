/*
         1
        / \
       2   3
      / \    
     4   5 
*/

// postOrderTraversal
function postOrderT(node){
    if(node != null){
        this.postOrderT(node.left);
        this.postOrderT(node.right);
        console.log(node.data);
    }
}

postOrderT(BT.root); 
//4,5,2,3,1


