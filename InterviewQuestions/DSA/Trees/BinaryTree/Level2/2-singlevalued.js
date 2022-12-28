// A Single Valued Subtree is one in which all the nodes have same value.


    //     5
    //   /   \
    //  5     5


class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(){
        this.root = new Node(5);
        this.root.left = new Node(5);
        this.root.right = new Node(5);
    }
}

let isTreeSingleValued = true;

function isSingleValuedTree(node){
    if(node == null){
        return;
    }
    if((node?.left?.data && (node.data !== node.left.data))){
        isTreeSingleValued = false;
        return;
    }
    if((node?.right?.data && (node.data !== node.right.data))){
        isTreeSingleValued = false;
        return;
    }
    isSingleValuedTree(node.left);
    isSingleValuedTree(node.right);
}

let BT = new BinaryTree();
isSingleValuedTree(BT.root);
console.log("Is Single valued tree: "+isTreeSingleValued);


