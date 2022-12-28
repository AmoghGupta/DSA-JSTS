//CHECK BALANCED TREE

// A tree is height balanced if difference between heights of left and right subtrees is not more 
// than one for all nodes of tree. 

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(){


        // Balanced tree
        //         1
        //      /     \
        //    10      39
        //   /
        // 5

        this.root = new Node(1);
        this.root.left = new Node(10);
        this.root.right = new Node(39);
        this.root.left.left = new Node(5);


        // UNBALANCED
        //         1
        //      /    
        //    10   
        //   /
        // 5

        // this.root = new Node(1);
        // this.root.left = new Node(10);
        // this.root.left.left = new Node(5);

        // UNBALANCED
        //         1
        //         /
        //        2
        //         \
        //         3

        // this.root = new Node(1);
        // this.root.left = new Node(2);
        // this.root.left.right = new Node(3);
    }
}

// very important function 
function calculateHeight(node){
    // Base Case : Tree is empty
    if(node == null){
        return -1
    }

    // If tree is not empty then height = 1 + max of left height and right height
    return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right));
}

function checkIsBalancedTree(node){
    // if tree has no child its balanced
    if(node === null){
        return true;
    }
    // left subTree
    const lh = calculateHeight(node.left);
    // right subTree
    const rh = calculateHeight(node.right);
    
    // at every node the left subtree and right subtree height should be less than or equal to 1
    if(Math.abs(lh - rh) <= 1 && checkIsBalancedTree(node.left)== true && checkIsBalancedTree(node.right) == true){
        return true
    }
    return false;
}

let BT = new BinaryTree();
console.log(checkIsBalancedTree(BT.root)?"Tree is balanced":"Not a balanced tree");