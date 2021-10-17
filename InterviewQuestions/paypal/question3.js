// Sudoko Validator

/** 
 * 
 * {{ '5', '3', '.', '.', '7', '.', '.', '.', '.' }, 
    { '6', '.', '.', '1', '9', '5', '.', '.', '.' }, 
    { '.', '9', '8', '.', '.', '.', '.', '6', '.' }, 
    { '8', '.', '.', '.', '6', '.', '.', '.', '3' }, 
    { '4', '.', '.', '8', '.', '3', '.', '.', '1' }, 
    { '7', '.', '.', '.', '2', '.', '.', '.', '6' }, 
    { '.', '6', '.', '.', '.', '.', '2', '8', '.' }, 
    { '.', '.', '.', '4', '1', '9', '.', '.', '5' }, 
    { '.', '.', '.', '.', '8', '.', '.', '7', '9' }}
Rules : 
i. Same number shouldn't be present in the same row
ii. Same number shouldn't be present in the same column
iii. Same number shouldn't be present in the same 3*3 matrix 
 * 
 */



 /// SOLUTION IS : iterate and put in set 
 // or create object to track keys and if any key has count >1 that means its an invalid sudoko

const input = [
    [ '5', '3', '.', '.', '7', '.', '.', '.', '.' ], 
    [ '6', '.', '.', '1', '9', '5', '.', '.', '.' ], 
    [ '.', '9', '8', '.', '.', '.', '.', '6', '.' ], 
    [ '8', '.', '.', '.', '6', '.', '.', '.', '3' ], 
    [ '4', '.', '.', '8', '.', '3', '.', '.', '1' ], 
    [ '7', '.', '.', '.', '2', '.', '.', '.', '6' ], 
    [ '.', '6', '.', '.', '.', '.', '2', '8', '.' ], 
    [ '.', '.', '.', '4', '1', '9', '.', '.', '5' ], 
    [ '.', '.', '.', '.', '8', '.', '.', '7', '9' ]
]

// function hasDuplicates(array) {
//     return (new Set(array)).size !== array.length;
// }


// for(let i=0;i<input.length;i++){
//     let refactoredInput = input[i].join('').replaceAll('.','').replaceAll(',','');
//     if(hasDuplicates(refactoredInput)){
//         console.log("Invalid sudoko");
//     }
// }


const map = {};


for(let i=0;i<input.length;i++){
   for(let j=0;j<input[i].length;j++){ 
        if(map[input[i][j]] == undefined){
            map[input[i][j]] = 1;
        }else{
            map[input[i][j]] = map[input[i][j]]+1;
        }
   }
}

for(key in map){
    if(map[key]>1){
        console.log("Invalid sudoko");
        break;
    }
}





