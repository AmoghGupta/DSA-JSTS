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

    traverseList(){
        let node = this.head;
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

    insertAt(){
        // O(n)
    }

    removeFrom(){
        // O(n)
    }

    removeElement(data){
        // O(n)
    }

    isEmpty(){
        return this.head==null?true:false;
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
myll.deletNodeFromEnd();
myll.traverseList();
console.log("Number of items in list: "+myll.numberOfNodeinLinkedList());




