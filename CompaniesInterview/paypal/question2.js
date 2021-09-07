// Paint Bucket Fill


//https://www.youtube.com/watch?v=JMxl5rk7kGo&list=PLKKfKV1b9e8pWy_UIiJlOlX_T4al_UtQJ&index=3&ab_channel=ApniKaksha
// given a matrix you can move top bottom left and right
// now u are given a position, u need to move top bottom left and right, fill all positions with new color 

const screen = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 2, 2, 0],
];

let x = 4;
let y = 4;
let newColor = 3;
let prevColor = 2;

function floodFill(screen, r, c , newColor, prevColor){
    let rows = screen.length;
    let columns = screen[0].length;
    //if numbers go beyond boundary
    if(r>=rows || c>=columns){
        return;
    }
    //if current cell doesnt match with the previous color
    if(screen[r][c] != prevColor){
        return;
    }
    screen[r][c] = newColor;

    floodFill(screen, r, c+1 , newColor, prevColor);
    floodFill(screen, r, c-1 , newColor, prevColor);
    floodFill(screen, r+1, c , newColor, prevColor);
    floodFill(screen, r-1, c , newColor, prevColor);
}

floodFill(screen,x,y,newColor,prevColor);
console.log(screen);