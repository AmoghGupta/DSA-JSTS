
// you may encounter unexpected behaviors if you consider some values as usable (for example, '' or 0).
const value1 = 0 || 'default string';
console.log(value1);
// 'default string'


const value2 = '' || 1000;
console.log(value2);
// 1000


//  for this purpose we use nullish coalescing

const value3 = 0 ?? 'default string';
console.log(value3);
// 0


const value4 = '' ?? 1000;
console.log(value4);
// ''