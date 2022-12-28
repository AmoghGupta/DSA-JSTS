class MaxHeap {
    constructor() {
      this.values = [];
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
  
  const tree = new MaxHeap();
  tree.add(36);
  tree.add(23);
  tree.add(38);
  tree.add(45);
  tree.add(32);
  tree.add(57);
  tree.add(10);
  console.log(tree); // [57, 38, 45, 23, 32, 36, 10]