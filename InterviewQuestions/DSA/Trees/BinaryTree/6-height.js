// Height of empty tree is -1, 
// height of tree with one node is 0 
// and height of below tree is 2. 
// number of max branches is the height of the tree

/*
         1
        / \
       2   3
      / \    
     4   5 
*/

let height = -1;
let maxHeight = 0;
function calculateHeight(node){
     height = height+1;
     // at evert leaf node set the latest max height
     if(node.left == null && node.right == null){
        if(height>maxHeight){
            maxHeight = height;
        }
     }else{
        calculateHeight(node.left);
        calculateHeight(node.right);
     }
     height = height-1;
}
calculateHeight(BT.root)
console.log("Height of tree is "+maxHeight);