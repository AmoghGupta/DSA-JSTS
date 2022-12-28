// Given two binary trees with head reference as T and S 
// T - tree
// S - Subtree
// check if S is a subtree of T

// Traverse the tree T in preorder fashion. 
// For every visited node in the traversal, see if the subtree rooted with this node is identical to S

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree1{
    // Tree T
    //               26
    //             /   \
    //           10     3
    //         /    \     \
    //       4       6      3
    //        \
    //         30
    constructor(){
        this.root = new Node(26);
        this.root.left = new Node(10);
        this.root.right = new Node(3);
        this.root.left.left = new Node(4);
        this.root.left.left.right = new Node(30);
        this.root.left.right = new Node(6);
        this.root.right.right = new Node(3);
    }
}

class BinaryTree2{
    // SubTree S
    //           10  
    //         /    \ 
    //       4       6
    //        \
    //         30
    constructor(){
        this.root = new Node(10);
        this.root.left = new Node(4);
        this.root.right = new Node(6);
        this.root.left.right = new Node(30);
    }
}

let isIdentical = false;
let T = new BinaryTree1();
let S = new BinaryTree2();

function areIdenticalOrNot(root1, root2){
    if(root1 == null && root2 == null){
        isIdentical = true;
        return;
    }
    // while traversing if any node doesnt match which means trees are not identical
    if(root1.data !== root2.data){
        isIdentical = false;
        return;
    }
    if(root1 != null && root2 != null){
        areIdenticalOrNot(root1.left, root2.left);
        areIdenticalOrNot(root1.right, root2.right);
    }
}

function checkifSubTree(T){
    if(T == null){
        return;
    }
    // node matched, check if that node(along with its subtree) and the actual subtree are identical or not
    if(T.data === S.root.data){
        areIdenticalOrNot(T, S.root);
        return;
    }
    checkifSubTree(T.left);
    checkifSubTree(T.right);

}

checkifSubTree(T.root);
console.log("Is subtree :"+isIdentical);
