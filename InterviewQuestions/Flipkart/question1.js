// flatten array using custom logic instead of inbuilt flat function

const emptyArray = [];
const numbers = [10,[1, 2], [3, 4,[5,[6],7]]];

function flatternArray(num, index){
    if(index > num.length){
        return;
    }else{
        if(typeof(num[index]) === 'number'){
            emptyArray.push(num[index]);
        }
        if(Array.isArray(num[index])){
            flatternArray(num[index],0);
        }
    }
    flatternArray(num, index+1);
};


flatternArray(numbers,0);
console.log(emptyArray);
