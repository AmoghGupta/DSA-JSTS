// Lowest Common Ancestor in a Binary Tree
// The lowest common ancestor is the lowest node in the tree that has both n1 and n2 as descendants, 
// where n1 and n2 are the nodes for which we wish to find the LCA. Hence, the LCA of a binary tree with 
// nodes n1 and n2 is the shared ancestor of n1 and n2 that is located farthest from the root. 

// Approach 1 (By Storing root to n1 and root to n2 paths): 
// The idea of this approach is to store the path from the root to n1 and root to n2 in two separate data structures. 
// Then look simultaneously into the values stored in the data structure, and look for the first mismatch.


// Find LCA(5,6)
// O/p is 1

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    // Input:
    //              1
    //           /    \
    //          2       3
    //        /  \     / \   
    //       4    5   6   7
    constructor(){
        this.root = new Node(1);
        this.root.left = new Node(2);
        this.root.right = new Node(3);
        this.root.left.left = new Node(4);
        this.root.left.right = new Node(5);
        this.root.right.left = new Node(6);
        this.root.right.right = new Node(7);
    }
}


let path = [];
let allPaths = [];
// LCA(4, 5) = 2
// LCA(4, 6) = 1
// LCA(3, 4) = 1
// LCA(2, 4) = 2
let n1 = 4;
let n2 = 6;


function findPathsContainingN1andN2(node){
    if(node == null){
        return;
    }
    path.push(node.data);
    // leaf node
    if(node.left === null && node.right == null){
        // console.log(path);
        if(path.includes(n1) || path.includes(n2)){
            allPaths.push([...path]);
        }
        
    }
    findPathsContainingN1andN2(node.left);
    findPathsContainingN1andN2(node.right);
    path.pop(node.data);
}

let BT = new BinaryTree();
findPathsContainingN1andN2(BT.root);
console.log(allPaths);

let n1Path = allPaths[0];
let n2Path = allPaths[1];
let index = "Not found";

for(let i=0; i<n1Path.length; i++){
    if(n1Path[i] !== n2Path[i]){
        index = i;
        break;
    }
}
console.log(`Lowest common ancestor of ${n1} and ${n2}: `+n1Path[index-1]);
