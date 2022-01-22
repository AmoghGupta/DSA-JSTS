/*
         1
        / \
       2   3
      / \    
     4   5 
*/

function levelOrderT(node,level){
    if(node == null){
        return;
    }
    if(node != null){
        if(level == 1){
            console.log(node.data);
        }            
        else if(level >1){
            this.levelOrderT(node.left, level-1);
            this.levelOrderT(node.right, level-1);
        }           
    }
}

levelOrderT(BT.root,1); // 1
levelOrderT(BT.root,2); // 2,3
levelOrderT(BT.root,3); // 4,5
