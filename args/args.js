function max(...value) {
    return value.reduce((acc, val)=>{
        return acc + val;
    },0);
  }
  console.log(max(1,2,3));