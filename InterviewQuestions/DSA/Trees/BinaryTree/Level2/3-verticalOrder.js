// Print a Binary Tree in Vertical Order


        //         1
        //      /     \
        //     2        3
        //   /  \     /   \
        //  4    5   6     7
        //             \    \
        //              8    9 
       
        
        // -2  -1   0    1  2  3
        // Represents horizontal distance from left to right

// The output of print this tree vertically will be:
// 4      ---> -2
// 2      ---> -1
// 1 5 6  ---> 0
// 3 8    ---> 1
// 7      ---> 2
// 9      ---> 3

// Solution
// Once we have maximum and minimum distances from root,
// We iterate for each vertical line at distance minimum to maximum from root, 
// and for each vertical line traverse the tree and print the nodes which lie on that vertical line.

class Node{
    constructor(item) {
    this.left = null;
    this.right = null;
    this.data = item;
    }
}
let root, min = 0, max = 0;

// For the nodes of a binary tree, the horizontal distance is defined as follows: 
// Horizontal distance of the root = 0. 
// Horizontal distance of a ​left child = horizontal distance of its parent - 1. 
// Horizontal distance of a right child = horizontal distance of its parent + 1.

function findMinMax(node, hd){
    // Base case
    if (node == null){
        return;
    }
    // Update min and max
    if (hd < min){
        min = hd;
    }else if (hd > max){
        max = hd;
    }
    // Recur for left and right subtrees
    findMinMax(node.left, hd - 1);
    findMinMax(node.right, hd + 1);
}

/* Let us construct the tree shown in above diagram */
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);
root.right.right.right = new Node(9);

findMinMax(root,0);

console.log("Horizontal distance of leftest node i.e 4 is "+min);
console.log("Horizontal distance of rightest node i.e 9 is "+max);

function printVerticalLine(node, line_no, hd){
    if (node == null){
        return;
    }
    // If this node is on the given line number
    if (hd == line_no){
        console.log(node.data + " ");   
    }
    // Recur for left and right subtrees
    printVerticalLine(node.left, line_no, hd - 1);
    printVerticalLine(node.right, line_no, hd + 1);
}

function verticalOrder(node){
    // Iterate through all possible vertical lines starting
    // from the leftmost line and print nodes line by line
    for (let line_no = min; line_no <= max; line_no++){
        console.log(`printVerticalLine(${'node'},${line_no},${0})`)
        printVerticalLine(node, line_no, 0);
    }
}

verticalOrder(root);


