// Given a sorted array where every number appears twice but one, find the number that appears only once

let arr = [1,1,2,2,3,3,4,4,5,5,6,7,7,8,8];

let newObject = arr.reduce((acc,item)=>{
    if(Object.keys(acc).includes(item.toString())){
        acc[item] = acc[item]+1;
    }else{
        acc[item] = 1
    }
    return acc;
},{})

for(key in newObject){
    if(newObject[key] !=2){
        console.log(key);
    }
}



