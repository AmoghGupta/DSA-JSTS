// my object
let obj = {
    a:1,
    b:2,
    c:3
}
// destructing obj and extracting key 'a' and renaming to aVar
const {a:aVar} =  obj;

console.log(aVar);