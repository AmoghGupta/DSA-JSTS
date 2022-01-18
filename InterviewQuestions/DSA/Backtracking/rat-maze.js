
let arr = [
    [ 1, 0, 0, 0 ],
    [ 1, 1, 0, 1 ],
    [ 1, 1, 0, 0 ],
    [ 0, 1, 1, 1 ]   
];

const [srx,sry, dsx,dsy] = [0,0,3,3];

function ratTraverse(maze,x,y,src){
    //for tracking each path
    src.push([x,y]);
    if(x == dsx && y == dsy){
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

