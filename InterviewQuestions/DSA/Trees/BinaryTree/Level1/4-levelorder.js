/*
         1                          <---- LEVEL 1
        / \
       2   3                        <---- LEVEL 2
      / \    
     4   5                          <---- LEVEL 3
*/

// we decrease level by 1 everytime to make sure to reach that particular level

function levelOrderT(node,level){
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
