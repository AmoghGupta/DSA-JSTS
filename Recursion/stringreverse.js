// reverse a string

let str = "hello world";


function stringReverse(str,index){
    //base condition
    if(index >= str.length){
        return;
    }
    //recurrence relation that reduces all other cases towards the base case.
    stringReverse(str,index+1);
    console.log(str[index]);

}

stringReverse(str,0);
