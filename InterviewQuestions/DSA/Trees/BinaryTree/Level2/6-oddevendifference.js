// Odd even level difference

// Find the difference between the sum of node values at even levels and the sum of node values at the odd levels.

// Input:
//             10
//           /    \
//         20      30
//        /  \         
//      40    60      

// Output: 60

class Node{
    constructor(data,left=null,right=null,){
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BinaryTree{
    // Input:
    //             10
    //           /    \
    //         20      30
    //        /  \         
    //      40    60
    constructor(){
        this.root = new Node(10);
        this.root.left = new Node(20);
        this.root.right = new Node(30);
        this.root.left.left = new Node(40);
        this.root.left.right = new Node(60);
    }
}

function findHeightofTree(node){
     // Base Case : Tree is empty
   if(node == null){
    return -1
    }
    // If tree is not empty then height = 1 + max of left height and right height
    return 1 + Math.max(findHeightofTree(node.left), findHeightofTree(node.right));
}

let oddSum = 0;
let evenSum = 0;

function getOddEvenDifference(node, level, type){
    if(node != null){
        if(level == 1){
            if(type === 'even'){
                evenSum = evenSum + node.data;
            }else{
                oddSum = oddSum + node.data;
            }
        }            
        else if(level >1){
            getOddEvenDifference(node.left, level-1, type);
            getOddEvenDifference(node.right, level-1, type);
        }           
    }
}


let BT = new BinaryTree();

let levels = findHeightofTree(BT.root)+1;

for(let i=1; i<= levels;i++){
    getOddEvenDifference(BT.root, i, i%2==0?"even":"odd");
}
console.log("Odd Sum: "+oddSum);
console.log("Even Sum: "+evenSum);
console.log("Difference is "+ (oddSum-evenSum));
