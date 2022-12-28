// DIAMETER OF A TREE or LENGTH OF LONGEST CHAIN/PATH IN THE TREE

// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
// This path MAY OR MAY NOT PASS THROUGH ROOT.
// The length of a path between two nodes is represented by the number of edges between them.

// REMEMBER: IF your longest path passes through root then simple logic will work which is: leftSubtree height + rightSubtree height +1
// but in if the longest path doesnt pass through root then 
// you need to calculate the longest path at each node recursively


// A binary tree node
class Node{
    // Constructor to create a new node
    constructor(data){
      this.data = data
      this.left = null
      this.right = null
    }
}
    
// The function Compute the "height" of a tree. Height is the
// number of nodes along the longest path from the root node
// down to the farthest leaf node.
function height(node){
    // Base Case : Tree is empty
    if(node == null)
        return 0

    // If tree is not empty then height = 1 + max of left height OR right height
    return 1 + Math.max(height(node.left), height(node.right))
}

let longestPath = 0;
// Function to get the diameter of a binary tree
// calculating longest path at each node and storing it
// it will be updated if any node is found to have longest path

function diameter(root){
    // Base Case when tree is empty
    if(root == null){
        return 0;
    }
    let lheight = height(root.left);
    let rheight = height(root.right);    
    if(longestPath < lheight+rheight+1){
        longestPath = lheight+rheight+1;
    }
    diameter(root.left);
    diameter(root.right);
}
    
    
  // Driver Code
   
  // Constructed binary tree is
  //             1
  //           /   \
  //         2      3
  //       /  \
  //     4     5
    
//   root = new Node(1)
//   root.left = new Node(2)
//   root.right = new Node(3)
//   root.left.left = new Node(4)
//   root.left.right = new Node(5)

//   diameter(root);
//   console.log(longestPath); //4



    //             1
    //           /   \
    //         2      3
    //       /  \
    //     4     5
    //          / \
//             6    7
//            /      \
//         11         8
//        /            \
//      12              9
//     /                 \
//    13                  10
//   /
//  14    

  root = new Node(1)
  root.left = new Node(2)
  root.right = new Node(3)
  root.left.left = new Node(4)
  root.left.right = new Node(5)
  root.left.right.left = new Node(6);
  root.left.right.left.left = new Node(11);
  root.left.right.left.left.left = new Node(12);
  root.left.right.left.left.left.left = new Node(13);
  root.left.right.left.left.left.left.left = new Node(14);
  root.left.right.right = new Node(7);
  root.left.right.right.right = new Node(8);
  root.left.right.right.right.right = new Node(9);
  root.left.right.right.right.right.right = new Node(10);
  diameter(root);
  console.log(longestPath); //10