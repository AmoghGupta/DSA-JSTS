// Given a Binary Tree, find its Boundary Traversal.
// Input:
//         20 
//       /   \
//      8     22  
//     /  \     \ 
//    4    12    25
//     \   / \
//      9 10  14

// Output: 20 8 4 9 10 14 25 22
     
class Node{
    constructor(item) {
    this.left = null;
    this.right = null;
    this.data = item;
    }
}
     
let root;
   
// A simple function to print leaf nodes of a binary tree
function printLeaves(node){
    if (node == null){
        return;
    }
    // Print it if it is a leaf node
    if (node.left == null && node.right == null){
        console.log(node.data + " ");
    }else{
        printLeaves(node.left);
        printLeaves(node.right);
    }
}
   
// A function to print all left boundary nodes,
// except a leaf node.
// Print the nodes in TOP DOWN manner
function printBoundaryLeft(node){
    if (node == null)
        return;

    if (node.left != null) {
        // to ensure top down order, print the node
        // before calling itself for left subtree
        console.log(node.data + " ");
        printBoundaryLeft(node.left);
    }
    else if (node.right != null) {
        console.log(node.data + " ");
        printBoundaryLeft(node.right);
    }
}
   
// A function to print all right boundary nodes,
// except a leaf node
// Print the nodes in BOTTOM UP manner
function printBoundaryRight(node){
    if (node == null)
        return;
    if (node.right != null) {
        // to ensure bottom up order, first call for right
        // subtree, then print this node
        printBoundaryRight(node.right);
        console.log(node.data + " ");
    }
    else if (node.left != null) {
        printBoundaryRight(node.left);
        console.log(node.data + " ");
    }
}
   
// A function to do boundary traversal of a given binary tree
function printBoundary(node){
    if (node == null)
        return;

    console.log(node.data + " "); // 20
    
    // // Print the left boundary in top-down manner.
    printBoundaryLeft(node.left); // 8,4

    // Print all leaf nodes
    printLeaves(node.left); // 9, 10, 14

    printLeaves(node.right); //25

    // Print the right boundary in bottom-up manner
    printBoundaryRight(node.right); //22
}
     
root = new Node(20);
root.left = new Node(8);
root.left.left = new Node(4);
root.left.left.right = new Node(9);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right = new Node(22);
root.right.right = new Node(25);
printBoundary(root);