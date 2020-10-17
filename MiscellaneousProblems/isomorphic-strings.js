//Check if two given strings are isomorphic to each other
// Input:  str1 = "aab", str2 = "xxy"
// Output: True
// 'a' is mapped to 'x' and 'b' is mapped to 'y'.

// Input:  str1 = "aab", str2 = "xyz"
// Output: False
// One occurrence of 'a' in str1 has 'x' in str2 and 
// other occurrence of 'a' has 'y'.

let str1 = "aab";
let str2  = "xyz";
let obj = {};

function isomorphic(str1,str2,index){

    if(index > str1.length-1){
        return;
    }
    
    if(obj[str1[index]] && str2[index] != obj[str1[index]]){
        console.log("Not isomorphic")
        return;
    }
    
    obj[str1[index]]=str2[index];

    isomorphic(str1,str2,index+1);

}

isomorphic(str1,str2,0);