//Tower of Hanoi is a mathematical puzzle where we have three rods and n disks. 
//The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
//1) Only one disk can be moved at a time.
// 2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// 3) No disk may be placed on top of a smaller disk.

function towerOfHanoi(n,from,to,aux) { 
    if (n == 1) { 
        console.log("Move disk 1 from rod " + from  + " to rod " + to); 
        return; 
    } 
    towerOfHanoi(n-1, from, aux, to); 
    console.log("Move disk " + n + " from rod " + from + " to rod " + to); 
    towerOfHanoi(n-1, aux, to, from); 
} 

// no of disks
let n=3;
// three towers A(from),C(to), B(aux)- means middle rod
towerOfHanoi(n, 'A', 'C', 'B');  