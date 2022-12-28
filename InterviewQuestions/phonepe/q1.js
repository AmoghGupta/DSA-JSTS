// Given an array with integers from 1 to n. With a missing integer k. Find k.

let arr = [1,2,3,4,5,6,8];
arr.forEach((item,index)=>{
    if(item !== index+1){
        console.log(index+1);
    }
})
