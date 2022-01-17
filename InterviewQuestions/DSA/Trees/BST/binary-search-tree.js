// average time complexity for access, search, insertion ,deletion is
// Θ(log(n))

// pre, post and inorder traversals are DFS traversals
// level order traversal is BFS traversals

class Node{
    constructor(data, left=null,right=null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root= null;
    }

    insert(data){
        let newNode = new Node(data);
        if(this.root == null){
            this.root = newNode;
        }
        else{
            this.insertNode(this.root, newNode);
        }        
    }

    insertNode(node, newNode){
        if(newNode.data<node.data){
            if(node.left==null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right==null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data); 
    }

    removeNode(node,key){
        //root node
        //empty
        if(node === null){
            return;
        }
        else if(key<node.data){
            node.left = this.removeNode(node.left,key);
            return node;
        }
        else if(key>node.data){
            node.right = this.removeNode(node.right,key);
            return node;
        }
        else{
            //delete node with no children
            if(node.left == null && node.right == null){
                node = null;
                return node;
            }

            //delete node with one children
            if(node.left == null){
                node = node.right;
                return node;
            }

            else if(node.right == null){
                node = node.left;
                return node;
            }

            //delete node with two children
            // find min node in the right subtree
            // replace the minimum node data with the current node data
            // and remove the minimum node
            let minNode =  this.findMinNode(node.right);
            node.data = minNode.data;

            node.right = this.removeNode(node.right,minNode.data);
            return node;
        }
    }

    findMinNode(node){
        if(node.left == null){
            return node;
        }else{
            return this.findMinNode(node.left);
        }
    }

    // inorder traversal returns in increasing order
    inorderT(node){
        if(node != null){
            this.inorderT(node.left);
            console.log(node.data); 
            this.inorderT(node.right);
        }
    }

    getRootNode() { 
        return this.root; 
    } 

    preOrderT(node){
        if(node != null){
            console.log(node.data); 
            this.preOrderT(node.left);
            this.preOrderT(node.right);
        }
    }

    postOrderT(node){
        if(node != null){
            this.postOrderT(node.left);
            this.postOrderT(node.right);
            console.log(node.data); 
        }
    }

    // in level order traversal you need to pass the level for 
    // which you want the nodes to be printed
    // if you want to print the nodes at all level then run this code in a loop
    levelOrderT(node,level){
        if(node == null){
            return;
        }
        if(node != null){
            if(level == 1){
                console.log(node.data);
            }            
            else if(level >1){
                this.levelOrderT(node.left, level-1);
                this.levelOrderT(node.right, level-1);
            }           
        }
    }

    search(node, data) { 
        if(node === null) 
            return null; 
    
        else if(data < node.data) 
            return this.search(node.left, data); 
    
        else if(data > node.data) 
            return this.search(node.right, data); 

        else
            return node; 
    } 
}

var BST = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
BST.insert(50); 
BST.insert(42); 
BST.insert(60); 
BST.insert(21); 
BST.insert(45); 
BST.insert(47); 
BST.insert(52); 
BST.insert(68); 
BST.insert(62); 

var root = BST.getRootNode(); 
         

// console.log("***********ROOT NODE*************")
// console.log(root.data); 

// //inorder
// console.log("***********INORDER TRAVERSAL*************")
// BST.inorderT(root); 


// console.log("***********PREORDER TRAVERSAL*************")
// BST.preOrderT(root); 
// console.log("***********POSRTORDER TRAVERSAL*************")
// BST.postOrderT(root); 

// console.log("***********MIN NODE*************")
// console.log(BST.findMinNode(root).data); 

// console.log("*******SEARCH 60***********")
// console.log("Found: "+BST.search(root,60).data)

// console.log("*******REMOVE 60***********")
// BST.remove(60); 
// console.log("Removed 60")


console.log("***********LEVEL ORDER TRAVERSAL*************")
console.log("printing all the nodes at that level in BST")
BST.levelOrderT(root,3); 