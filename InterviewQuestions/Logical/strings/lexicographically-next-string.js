// Lexicographically next string

//Input : geeks
//Output : geekt
//The last character 's' is changed to 't'.

//Input : raavz
//Output : raawz
//Since we can't increase last character, 
//we increment previous character.

//EDGE CASE
//Input :  zzz
//Output : zzza

let str = 'geeks';
let lastIndex= str.length-1;

function lexicoNextString(str,lastIndex){
    if(lastIndex != 0 && (str.charAt(lastIndex) =='z' || str.charAt(lastIndex)=='Z')){        
        lastIndex = lastIndex-1;
        return lexicoNextString(str,lastIndex);
    }
    else if(lastIndex == 0 && (str.charAt(lastIndex) =='z' || str.charAt(lastIndex)=='Z')){
        str = str + 'a';
        return str;
    }
    else{
        let nextChar = String.fromCharCode(str.charCodeAt(lastIndex) + 1);
        str = str.split('');
        str[lastIndex]=nextChar;
        str = str.join('');        
        return str;
    }
}
console.log(lexicoNextString(str,lastIndex));