// Height of empty tree is -1, 
// height of tree with one node is 0 
// and height of below tree is 2. 
// number of max branches is the height of the tree

// Height is =  Number of levels -1 
// 3-1 = 2 in this case
/*
         1
        / \
       2   3
      / \    
     4   5 
*/
/************************************************/
// Approach 1

// let height = -1;
// let maxHeight = 0;
// function calculateHeight(node){
//      height = height+1;
//      // at evert leaf node set the latest max height
//      if(node.left == null && node.right == null){
//         if(height>maxHeight){
//             maxHeight = height;
//         }
//      }else{
//         calculateHeight(node.left);
//         calculateHeight(node.right);
//      }
//      // reduce a height by 1 after returning from leaf node 
//      height = height-1;
// }
// calculateHeight(BT.root)
// console.log("Height of tree is "+maxHeight);


/************************************************/

// Approach 2

class Node{
   constructor(data,left=null,right=null,){
       this.left = left;
       this.right = right;
       this.data = data;
   }
}
class BinaryTree{
   constructor(){
       this.root = new Node(1);
       this.root.left = new Node(2);
       this.root.right = new Node(3);
       this.root.left.left = new Node(4);
       this.root.left.right = new Node(5);
   }
}

function calculateHeight(node){
   // Base Case : Tree is empty
   if(node == null){
       return -1
   }

   // If tree is not empty then height = 1 + max of left height and right height
   return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
}

var BT = new BinaryTree();
console.log(calculateHeight(BT.root));

/************************************************/