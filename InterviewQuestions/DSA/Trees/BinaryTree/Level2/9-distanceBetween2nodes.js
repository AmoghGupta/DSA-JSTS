// Distance between two nodes of a Binary Tree
// The distance between two nodes is the minimum number of edges to be traversed to reach one node from another.

// Dist(n1, n2) = Dist(root, n1) + Dist(root, n2) - 2*Dist(root, lca)

class Node{
    constructor(key) {
        this.left = null;
        this.right = null;
        this.key = key;
    }
}
            
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);


let n1= 4;let n2= 5;
// let n1= 4;let n2= 6;
// let n1= 3;let n2= 4;
// let n1= 2;let n2= 4;
// let n1= 8;let n2= 5;


let foundLevel = 0;
let level1 = 0;
let level2 = 0;
let lcaLevel = 0;
let lca = null;

/*
           1
         /   \
        2      3
      / \    /  \
     4   5   6   7
              \
               8 
*/  
// Dist(4,5)= 3 + 3 -2*2 = 2

function calculateLevelOfNodeFromRoot(node, nodeToFind, level){
    if(node == null){
        return;
    }
    if(node.key === nodeToFind){
        foundLevel = level;
    }
    calculateLevelOfNodeFromRoot(node.left,nodeToFind, level+1);
    calculateLevelOfNodeFromRoot(node.right,nodeToFind, level+1);
    level  = level-1;
}
calculateLevelOfNodeFromRoot(root,n1,0);
level1 = foundLevel;
calculateLevelOfNodeFromRoot(root,n2,0);
level2 = foundLevel;

let path = [];
let allPaths = [];

function findPathsContainingN1andN2(node){
    if(node == null){
        return;
    }
    path.push(node.key);
    // leaf node
    if(node.left === null && node.right == null){
        // console.log(path);
        if(path.includes(n1) || path.includes(n2)){
            allPaths.push([...path]);
        }
        
    }
    findPathsContainingN1andN2(node.left);
    findPathsContainingN1andN2(node.right);
    path.pop(node.key);
}
findPathsContainingN1andN2(root);
let n1Path = allPaths[0];
let n2Path = allPaths[1];
let index = "Not found";

for(let i=0; i<n1Path.length; i++){
    if(n1Path[i] !== n2Path[i]){
        index = i;
        break;
    }
}
lca = n1Path[index-1];
calculateLevelOfNodeFromRoot(root,lca,0);
lcaLevel = foundLevel;

console.log(`Minimum distance between (${n1},${n2}) is `+ (level1+level2 -2*lcaLevel));
// Minimum distance between (4,5) is 2
// Minimum distance between (4,6) is 4
// Minimum distance between (3,4) is 3
// Minimum distance between (2,4) is 1
// Minimum distance between (8,5) is 5
