// Ancestors in Binary Tree

// Given a Binary Tree and a target key, you need to find all the ancestors of the given target key.


class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    // Input:
    //           1
    //         /   \
    //       2      3
    //     /  \
    //   4     5
    //  /
    // 7
    constructor(){
        this.root = new Node(1);
        this.root.left = new Node(2);
        this.root.right = new Node(3);
        this.root.left.left = new Node(4);
        this.root.left.right = new Node(5);
        this.root.left.left.left = new Node(7);
    }
}


let path = [];
let allPaths = [];
let key = 7;

function findPathsContainingKey(node){
    if(node == null){
        return;
    }
    path.push(node.data);
    // leaf node
    if(node.left === null && node.right == null){
        // console.log(path);
        if(path.includes(key)){
            allPaths.push([...path]);
        }
        
    }
    findPathsContainingKey(node.left);
    findPathsContainingKey(node.right);
    path.pop(node.data);
}

let BT = new BinaryTree();
findPathsContainingKey(BT.root);
console.log(allPaths);
let indexOfKey = allPaths.indexOf(key);
console.log(`All ancestors of key ${key} `+ allPaths[0].slice(0,indexOfKey));

