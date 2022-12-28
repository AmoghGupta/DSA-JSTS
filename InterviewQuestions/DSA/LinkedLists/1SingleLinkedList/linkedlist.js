// When to use linked lists? 
// Linked lists are often used because of their efficient insertion and deletion.
// Dynamic Memory Allocations - when we dont know how much memory will be needed

// Real time Application of linked lists
// 1) In web browsers, you might have seen that we can always access the previous and next URL using the back and forward button. Access to previous and next URL searched is possible because they are linked using a linked list.
// 2) The songs in the Music Player are linked to the next and the previous song. We can play songs either from the starting or the end of the list.
// 3) In an Image Viewer, the next and the previous images are linked; hence they can be accessed by the previous and the next button.

//access : O(n)
//search : O(n)
// insertion (at start/end): O(1)
// deletion(at start): O(1)
// deletion at end or any other place is  0(n)

class Node{
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        //head remains at the same place
        this.head = null;
        //tail keeps updating
        this.tail = null;
        this.size = 0;
    }

    createAndAddNode(data){
        let newNode = new Node(data,null);
        this.size++;
        // if root/first element 
        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        }else{
         this.addNewNode(newNode); 
        }
        
    }

    addNewNode(newNode){
        this.tail.next = newNode;
        this.tail = newNode;

        // let current;
        // current = this.head;
        // while(current.next!=null){
        //     current= current.next;
        // }
        // current.next = newNode;
    }

    numberOfNodeinLinkedList(){
        return this.size;
    }

    traverseList(head =null){
        let node = head || this.head;
        while(node){
            console.log(node.data);
            node = node.next;
        }
    }

    deletNodeFromEnd(){
        let node = this.head;
        while(node.next != this.tail){
            node = node.next;
        }
        node.next = null;
        this.tail = node;
        this.size--;
    }

    insertAtStart(data){
        let newNode = new Node(data,null);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAtEnd(data){
        let newNode = new Node(data,null);
        let currentNode = this.head;
        while(currentNode.next !== null){
            currentNode = currentNode.next;
        }
        newNode.next= null;
        currentNode.next = newNode;
        this.size++;
    }

    insertAfteraGivenNode(data, newData){
        let newNode = new Node(newData,null);
        let currentNode = this.head;
        while(currentNode.data !== data){
            currentNode = currentNode.next;
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.size++;
    }

    removeElement(data){
        let currentNode = this.head;
        let nextNode =  this.head.next;
        while(nextNode.data !== data){
            currentNode = currentNode.next;
            nextNode = nextNode.next;
        }
        currentNode.next = nextNode.next;
        this.size--;
    }

    isEmpty(){
        return this.head==null?true:false;
    }

    // here we need to use three pointers
    // current, next, prev
    reverseLinkedList(){
        let node = this.head;
        let currentNode = node;
        let prevNode = null;
        let nextNode = null;
        while(currentNode != null){
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode; 
            currentNode = nextNode;
        }
        node = prevNode;
        return node;
    }
}


let myll = new LinkedList();
console.log("Is list empty: "+myll.isEmpty());
console.log("Inserting nodes start....");
myll.createAndAddNode(22);
myll.createAndAddNode(21);
myll.createAndAddNode(19);
myll.createAndAddNode(17);
console.log("Inserting nodes end....");
console.log("Traversing start....");
myll.traverseList();
console.log("Traversing end.....");
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());
console.log("Is list empty: "+myll.isEmpty());
console.log("Deleting last item in linked list");
myll.deletNodeFromEnd();
myll.traverseList();
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());
console.log("Inserting 10 at the start");
myll.insertAtStart(10);
myll.traverseList();
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());
console.log("Inserting 17 after 22");
myll.insertAfteraGivenNode(22,17);
myll.traverseList();
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());
console.log("Inserting 51 at the end");
myll.insertAtEnd(51);
myll.traverseList();
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());
console.log("Removing element 21 ");
myll.removeElement(21);
myll.traverseList();
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());
console.log("Reversing the linked list");
let newHead = myll.reverseLinkedList();
myll.traverseList(newHead);




