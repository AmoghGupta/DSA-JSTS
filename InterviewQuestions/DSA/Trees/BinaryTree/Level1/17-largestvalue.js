// Largest value in each level of a binary tree

// Given a binary tree, find the largest value in each level.

//        10
//      /   \
//     /     \
//    8       2
//   / \     /
//  3   5   2


class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    constructor(){
        this.root = new Node(10);
        this.root.left = new Node(8);
        this.root.right = new Node(2);
        this.root.left.left = new Node(3);
        this.root.left.right = new Node(5);
        this.root.right.left = new Node(2);
    }
}

const myobj = {};

function largestValuesInEachLevel(node, level, obj){
    if(node == null){
        return;
    }
    if(level == 1){
        obj.push(node.data);
    }
    if(level > 1){
        largestValuesInEachLevel(node.left, level-1, obj);
        largestValuesInEachLevel(node.right, level-1, obj);
    }
}

const BT = new BinaryTree();

for(let i=1; i<=3; i++){
    largestValuesInEachLevel(BT.root,i,myobj[`L${i}`]=[]);
}
// console.log(myobj);
let max = Object.keys(myobj).map((key)=>{
    return Math.max(...myobj[key]);
});
console.log("Largest value in each level: ");
console.log(max);
