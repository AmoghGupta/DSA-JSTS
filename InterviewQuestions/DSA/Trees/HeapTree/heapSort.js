// SIMPLE LOGIC: RUN MAXHEAP AGAIN AND AGAIN AND EXTRACT 1ST ELEMENT TO GET THE CURRENT LARGEST VALUE
// First convert the array into heap data structure using heapify, 
// then we know that the topmost element is the biggest 
// remove topmost element i.e first element one by one from the max heapified array and
// run the maxheap algo again on the remaining array
// until the array length is 0


class MaxHeap {
    constructor() {
        this.values = [];
    }
    heapifyArray(arr){
        arr.forEach((item)=>{
            this.add(item);
        });
    }
    add(element) {
      this.values.push(element);
      let index = this.values.length - 1;
      const current = this.values[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
  
        if (parent <= current) {
          this.values[parentIndex] = current;
          this.values[index] = parent;
          index = parentIndex;
        } else break;
      }
    }
}
// sorted array =  57,45,38,36,32,23,10  
let array = [38, 57, 45, 32, 23, 10, 36];
const tree = new MaxHeap();
let sortedArr = [];

while(array.length){
    tree.values = [];
    tree.heapifyArray(array);
    sortedArr.push(tree.values[0]);
    array = tree.values;
    array = array.slice(1,tree.values.length);
}
console.log(sortedArr);



