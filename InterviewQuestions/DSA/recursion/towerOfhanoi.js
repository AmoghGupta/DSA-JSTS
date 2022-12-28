// Tower of Hanoi is a mathematical puzzle where we have '3' rods and N disks.
// The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
// 1) Only one disk can be moved at a time.
// 2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
// 3) No disk may be placed on top of a smaller disk.


// An example with 3 disks :
// Step 1 : Shift first disk from 'A' to 'C'.
// Step 2 : Shift second disk from 'A' to 'B'.
// Step 3 : Shift first disk from 'C' to 'B'.

// Step 4 : Shift third disk from 'A' to 'C'.

// Step 5 : Shift first disk from 'B' to 'A'.
// Step 6 : Shift second disk from 'B' to 'C'.
// Step 7 : Shift first disk from 'A' to 'C'.

function towerOfHanoi(n,source,dest,aux) {
    if (n == 1) { 
        console.log("Move disk 1 from rod " + source  + " to rod " + dest); 
        return; 
    }
    towerOfHanoi(n-1, source, aux, dest);
    console.log("Move disk " + n + " from rod " + source + " to rod " + dest); 
    towerOfHanoi(n-1, aux, dest, source);
}

// no of disks
let n=3;
// three towers A(from),C(to), B(aux)- means middle rod
towerOfHanoi(n, 'A', 'C', 'B');