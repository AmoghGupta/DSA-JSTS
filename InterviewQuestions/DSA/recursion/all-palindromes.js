//Given a string, print all possible palindromic partitions

// Given a string, find all possible palindromic partitions of given string.

// example
// nitin
// nitin, iti

let mystr = "bcc";

function palindromeTest(original, substring,index,first=""){
    for(let i=0;i<=substring.length;i++){
        first = first+substring[i];
        if(first === first.split('').reverse().join('')){
            console.log(first);
        }
    }
    if(index>=original.length-1){
        return;
    }

    palindromeTest(original, original.substring(index+1),index+1,original[index]);

}

palindromeTest(mystr,"",0);