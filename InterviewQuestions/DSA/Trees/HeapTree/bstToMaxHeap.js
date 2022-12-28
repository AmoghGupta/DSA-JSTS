// Approach 

// Create an array arr[] of size n, where n is the number of nodes in the given BST. 
// Perform the inorder traversal of the BST and copy the node values in the arr[] in sorted 
// order. 
// Now perform the postorder traversal of the tree. 
// While traversing the root during the postorder traversal, one by one copy the values from the array arr[] to the nodes. 



const arr = [];
let i = 0;

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}
// Given
class BinarySearchTree{
    // Input:
    //           4
    //         /   \
    //       2       6
    //     /  \     / \
    //    1     3  5   7

    constructor(){
        this.root = new Node(4);
        this.root.left = new Node(2);
        this.root.right = new Node(6);
        this.root.left.left = new Node(1);
        this.root.left.right = new Node(3);
        this.root.right.left = new Node(5);
        this.root.right.right = new Node(7);
    }
}
function inOrderT(node){
    if(node != null){
        inOrderT(node.left);
        arr.push(node.data);
        inOrderT(node.right);
    }
}

function BSTToMaxHeap(root,arr){
    if (root == null)
        return;
    
    // recur on left subtree
    BSTToMaxHeap(root.left, arr);
    
    // recur on right subtree
    BSTToMaxHeap(root.right, arr);
    
    // copy data at index 'i' of 'arr' to
    // the node
    root.data = arr[i++];
}

const BST = new BinarySearchTree();
inOrderT(BST.root);
console.log(arr); //1,2,3,4,5,6,7
BSTToMaxHeap(BST.root, arr);
// now BST is a max Heap tree
console.log(BST);