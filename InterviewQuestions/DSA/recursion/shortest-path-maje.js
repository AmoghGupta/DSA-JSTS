// https://www.youtube.com/watch?v=S3rnLLHl0PM&ab_channel=ApniKaksha

// find the shortest path in the maze

let maze = [
    [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ], 
    [ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 ],  
    [ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 ],  
    [ 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],  
    [ 1, 1, 1, 0, 1, 1, 1, 0, 1, 0 ],  
    [ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 ],  
    [ 1, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],  
    [ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 ],  
    [ 1, 1, 0, 0, 0, 0, 1, 0, 0, 1 ]
];

let x = 0;
let y= 0;
//end point where we need to reach
let r = 3;
let s =4;


function isValid(maze, x,y,r,s,visited){
    let rows = maze.length;
    let columns = maze[0].length;
    return x>=0 && y>=0 && x < rows && y < columns && maze[x][y] ==1 && !visited[x][y]
   
}

function shortestPath(maze, x,y,r,s){
    let rows = maze.length;
    let columns = maze[0].length;    
    let visited = [...Array(rows)].map(x=>Array(columns).fill(false));
    return shortestPathInMaze(maze, x,y,r,s,visited);
}


function shortestPathInMaze(maze, x,y,r,s,visited){
    // check if the maze cell is valid or not
    // if no path found it will return a big number
    if(!isValid(maze,x,y,r,s,visited)){
        return 1000000;
    }
    // when destination reached
    if(x==r && y==s){
        return 0;
    }
    //mark cell as visited 
    visited[x][y] = true;
    //traverse
    let right= shortestPathInMaze(maze,x+1,y,r,s,visited) +1;
    let left = shortestPathInMaze(maze,x-1,y,r,s,visited) +1;
    let top = shortestPathInMaze(maze,x,y+1,r,s,visited) +1;
    let bottom = shortestPathInMaze(maze,x,y-1,r,s,visited) +1;
    //backtrack and mark cell as non visited 
    visited[x][y] = false;
    return Math.min(right,left,top,bottom);

}


console.log(shortestPath(maze, x,y,r,s));

