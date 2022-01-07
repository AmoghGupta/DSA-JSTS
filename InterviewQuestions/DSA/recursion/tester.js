/*** MULTIPLE RECURSIVE CALLS */

// NO LOOP

// function fun(n){
//     if(n>2){
//         fun(n-1);
//         fun(n-2);
//         fun(n-3);
//     }
//     console.log(n);
// }

// fun(5);



// WITH LOOP
function fun(n){
    if(n>2){
        for(let i=1;i<=3;i++){
            fun(n-i);
        }   
    }
    console.log(n);    
}

fun(5);