// Find the Zig-Zag Level Order Traversal of the Binary Tree.

// Input:
//            7
//         /     \
//        9       7
//      /  \     /   
//     8    8   6     
//    /  \
//   10   9 

// Output:
// 7 7 9 8 8 6 9 10 

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(){
        this.root = new Node(7);
        this.root.left = new Node(9);
        this.root.right = new Node(7);
        this.root.left.left = new Node(8);
        this.root.left.right = new Node(8);
        this.root.left.left.left = new Node(10);
        this.root.left.left.right = new Node(9);
        this.root.right.left = new Node(6);
    }
}

function levelOrderT(node,level){
    if(node != null){
        if(level == 1){
            console.log(node.data);
        }
        // if even level then traverse right to left
        else if(level >1 && level %2 ==0){
            levelOrderT(node.right, level-1);
            levelOrderT(node.left, level-1);
        }    
        // else traverse left to right
        else{
            levelOrderT(node.left, level-1);
            levelOrderT(node.right, level-1);
        }          
    }
}

const BT = new BinaryTree();

for(let i=1; i<=4; i++){
    levelOrderT(BT.root,i);
}





