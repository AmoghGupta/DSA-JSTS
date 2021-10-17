/// Find a pair whose multiplication is x*y = result

const arrInput = [1, 4, 6, 8, 9, 10];
const result = 24; 
const pair=[];


function findPair(arr, res){
    for(let i=0; i<arr.length-1;i++){
        for(let j=i+1; j<arr.length;j++){
            arr[i]*arr[j]==res?pair.push([arr[i],arr[j]]):'';
        }
    }
}

findPair(arrInput,result);
console.log(pair);