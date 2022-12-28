// Two trees are identical when they have same data and arrangement of data is also same. 
// To identify if two trees are identical, we need to traverse both trees simultaneously, 
// and while traversing we need to compare data and children of the trees. 

/*
         1
        / \
       2   3
      / \    
     4   5 
*/

/*
         1
        / \
       2   3
      / \    
     4   5 
*/


class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(n1,n2,n3,n4,n5){
        this.root = new Node(n1);
        this.root.left = new Node(n2);
        this.root.right = new Node(n3);
        this.root.left.left = new Node(n4);
        this.root.left.right = new Node(n5);
    }
}
var isIdentical = true;

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

var BT1 = new BinaryTree(1,2,3,4,5);
var BT2 = new BinaryTree(1,2,3,4,5);
areIdenticalOrNot(BT1.root, BT2.root);
console.log(isIdentical?"Identical":"Not Identical");