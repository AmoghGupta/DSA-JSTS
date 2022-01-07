class Stack{
    constructor(sizeStack){
        if(isNaN(sizeStack)){
            //default size
            this.sizeStack = 10;
        }
        this.sizeStack = sizeStack;
        this.container = [];
    }

    push(data){
        if(this.container.length >= this.sizeStack){
            console.log("Size of stack exceeded");
            return;
        }
        console.log("Pushed new data: " +data);
        this.container.push(data);
    }

    pop(){
        if(this.container.length<1){
            console.log("Empty stack, nothing to pop");
            return;
        }
        console.log("Popped an element");
        this.container.pop();
    }

    peek(){
        if(this.container.length<1){
            console.log("Empty stack, nothing to peek");
            return;
        }
        console.log("Last Element in stack is:"+ this.container[this.container.length-1]);
    }

    printStack(){
        console.log(this.container);
    }

    reverse(){
        console.log("Stack Reversed");
        this.container = this.container.reverse();
    }
}


let s1 = new Stack(6);
s1.pop();
s1.push(20);
s1.push(10);
s1.push(9);
s1.push(11);
s1.push(25);
s1.printStack();
s1.pop();
s1.printStack();
s1.reverse();
s1.printStack();
s1.peek();
s1.push(22);
s1.push(23);
s1.printStack();
s1.push(22);
s1.push(22);
s1.printStack();