// Maximum sum leaf to root path

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    //     10
    //     /  \
    //   -2    7
    //   / \   
    //  8  -4    
    constructor(){
        this.root = new Node(10);
        this.root.left = new Node(-2);
        this.root.right = new Node(7);
        this.root.left.left = new Node(8);
        this.root.left.right = new Node(-4);
    }
}

let maxSum = 0;
let path = [];

function getmaxSumFromLeafToRoot(node){
    if(node === null){
        return ;
    }
    path.push(node.data);
    // if leaf node
    if(node.left == null && node.right == null){
        let sum = path.reduce(function(a, b) { return a + b; }, 0);
        if(sum > maxSum){
            maxSum = sum;
        }
    }
    getmaxSumFromLeafToRoot(node.left);
    getmaxSumFromLeafToRoot(node.right);

    path.pop(node.data);
}

let BT = new BinaryTree();
getmaxSumFromLeafToRoot(BT.root);
console.log(maxSum);