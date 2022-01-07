//REVERSAL ALGORITHM FOR ARRAY ROTATION

// function rotate(arr[], d, n) that rotates arr[] of size n by d elements.\
// Example
//Input :  arr[] = [1, 2, 3, 4, 5, 6, 7]
//         d = 2
//Output : arr[] = [3, 4, 5, 6, 7, 1, 2] 

// [1,2]=>[2,1]
// [3,4,5,6,7] =>[7,6,5,4,3]
// [2,1]+[7,6,5,4,3] ==> [2,1,7,6,5,4,3]
// reverse [3,4,5,6,7,1,2]



class ReversalAlgo{
    constructor(arr=[],d){
        this.arr = arr;
        this.d= d;
    }

    splitAndRotate(){
        let splitArray1 = this.arr.slice(0,this.d).reverse();
        let splitArray2  = this.arr.slice(this.d).reverse();
        return splitArray1.concat(splitArray2).reverse();
        
    }
}

let rotatedInstance =  new ReversalAlgo([1, 2, 3, 4, 5, 6, 7],2);
console.log(rotatedInstance.splitAndRotate())