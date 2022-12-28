// Given a Binary Tree. Check whether it is Symmetric or not, i.e. 
// whether the binary tree is a Mirror image of itself or not.


// Logic: divide tree into two left and right subtree 
// right node of left tree should be equal to left node of right tree
// left node of left tree should be equal to right node of right tree



class Node{
    constructor(data,left=null,right=null){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(n1,n2,n3,n4,n5,n6=null,n7=null){
        this.n1= n1;
        this.n2= n2;
        this.n3= n3;
        this.n4= n4;
        this.n5= n5;
        this.n6 = n6;
        this.n7 = n7;
    }

    createTree1(){
        // 5,1,1,2,2
        // Input:
        //          5
        //        /   \
        //       1     1
        //      /       \
        //     2         2
        // Output: True
        this.root = new Node(this.n1);
        this.root.left = new Node(this.n2);
        this.root.right = new Node(this.n3);
        this.root.left.left = new Node(this.n4);
        this.root.right.right = new Node(this.n5);
    }

    createTree2(){
        // 5,10,20,20,10,30
        // Input:
        //          5
        //        /   \
        //       10     10
        //      /  \     \
        //     20  20     30
        // Output: False
        this.root = new Node(this.n1);
        this.root.left = new Node(this.n2);
        this.root.left.left = new Node(this.n3);
        this.root.left.right = new Node(this.n4);
        this.root.right = new Node(this.n5);
        this.root.right.right = new Node(this.n6);
    } 

    createTree3(){
        // 1,2,3,4,2,3,4
        //      1
        //    /   \
        //   2     2
        //  / \   / \
        // 3   4 4   3
        this.root = new Node(this.n1);
        this.root.left = new Node(this.n2);
        this.root.left.left = new Node(this.n3);
        this.root.left.right = new Node(this.n4);
        this.root.right = new Node(this.n5);
        this.root.right.right = new Node(this.n6);
        this.root.right.left = new Node(this.n7);
    }
}
var isTreeSymmetric = false;
function isSymmetric(node1, node2){
    if(node1 == null && node2 == null){
        isTreeSymmetric = true;
        return;
    }
    // while traversing if any node doesnt match which means trees are not identical
    if(node1?.data !== node2?.data){
        isTreeSymmetric = false;
        return;
    }
    if(node1 != null && node2 != null){
        isSymmetric(node1.left, node2.right);
        isSymmetric(node1.right, node2.left);
    }
}


// var BT1 = new BinaryTree(5,1,1,2,2);
// BT1.createTree1();
// isSymmetric(BT1.root.left, BT1.root.right);
// console.log(isTreeSymmetric);



var BT2 = new BinaryTree(5,10,20,20,10,30);
BT2.createTree2();
isSymmetric(BT2.root.left, BT2.root.right);
console.log(isTreeSymmetric);

// var BT3 = new BinaryTree(1,2,3,4,2,3,4);
// BT3.createTree3();
// isSymmetric(BT3.root.left, BT3.root.right);
// console.log(isTreeSymmetric);
