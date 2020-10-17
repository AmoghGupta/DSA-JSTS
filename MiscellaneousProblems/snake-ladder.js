// [20,19,18,17,16,15,14,13,12,11]
// [1,2,3,4,5,6,7,8,9,10]

// print snake ladder

let snakeArray = [];

function snakeLadder(start,end,length,iteration){
    end = start-length+1; 
    for(let i=start;i>=end;i--){
        snakeArray.push(i);
    }
    (iteration%2 ==0)?console.log(snakeArray.reverse().join('|')):console.log(snakeArray.join('|')); 
    if(end == 1)return;
    start = end-1;
    snakeArray = [];

    snakeLadder(start,end,10,iteration+1);
}

snakeLadder(100,0,10,1);