// Given a Binary Tree. 
// Check whether all of its nodes have the value equal to the sum of their child nodes.

// every node is sum of left and right child

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(){
        this.root = new Node(10);
        this.root.left = new Node(8);
        this.root.right = new Node(2);
        this.root.left.left = new Node(3);
        this.root.left.right = new Node(5);
        this.root.right.left = new Node(2);
    }
}

let isChildSumParent = true;

function childSumParent(node){
    //        10
    //      /   \
    //     /     \
    //    8       2
    //   / \     /
    //  3   5   2
    
    // if leaf node
    if(node?.left == null && node?.right == null){
        return;
    }
    const left = node?.left?.data || 0;
    const right = node?.right?.data || 0;
    if(node.data !==  left + right){
        isChildSumParent = false;
    }
    childSumParent(node.left);
    childSumParent(node.right);
}

let BT = new BinaryTree();
childSumParent(BT.root);
console.log("Child sum parent applicable: " +isChildSumParent);
