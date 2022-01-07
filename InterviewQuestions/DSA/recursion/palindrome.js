// nitin

function isPalindrome(str,start,end){

    if(start == end){
        return true;
    }
    
    if(str[start] != str[end]){
        return false;
    }

    isPalindrome(str, start+1,end-1);
    return true;
}

let mystr = "aaaaaaaaab";
let end = mystr.length-1;
console.log(isPalindrome(mystr,0,end));