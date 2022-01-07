
// JOSEPHUS PROBLEM

//https://www.youtube.com/watch?v=dzYq5VEMZIg&ab_channel=Pepcoding

function josephus(n,k){
    if(n == 1){
        return 0;
    }else{
        let x = josephus(n-1,k);
        let y = (x+k)%n;
        return y;
    }
}

console.log(josephus(6,2));