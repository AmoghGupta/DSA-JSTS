// rat maze is a backtracking problem

// Count number of ways to reach destination in a Maze

// Given a maze with obstacles, count the number of paths to reach the rightmost-bottommost cell from the topmost-leftmost cell. 
// A cell in the given maze has a value of 1 if it is a blockage or dead-end, else 0.
// From a given cell, we are allowed to move to cells (i+1, j) and (i, j+1) only.


let count = 0;
// let arr = [
//     [ 1, 0, 0, 0 ],
//     [ 1, 1, 0, 1 ],
//     [ 1, 1, 0, 0 ],
//     [ 0, 1, 1, 1 ]   
// ];
// answer is 2
let arr = [
    [ 1, 1, 1, 1 ],
    [ 1, 0, 1, 1 ],
    [ 0, 1 ,1, 1 ],
    [ 1, 1, 1, 1 ] 
];
// answer is 4

const [srx,sry, dsx,dsy] = [0,0,3,3];

function ratTraverse(maze,x,y,src){
    //for tracking each path
    src.push([x,y]);
    if(x == dsx && y == dsy){
        count++;
        console.log(src);
        src.pop();
        return;
    }
    //either rat will go down
    if(x < dsx && maze[x+1][y]){
        ratTraverse(maze,x+1,y,src);
    }
    //either rat will go right
    if(y < dsy && maze[x][y+1]){
        ratTraverse(maze,x,y+1,src);
    }
    // backtracking the path (i.e reverting the step)
    src.pop();
}

ratTraverse(arr,srx,sry,[]);
console.log("Possible paths "+count);

