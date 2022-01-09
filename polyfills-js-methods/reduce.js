Array.prototype.myreduce = function(cb, initial) {
   let values = this;
   values.forEach((item)=>{
    initial = initial!=undefined ? cb(initial,item):item;
   });
   return initial;
  }

console.log([2,5,7,8].myreduce((a,b)=>{
    return a+b;
  },10));

  