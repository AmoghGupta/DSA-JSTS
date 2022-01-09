// function abc(a,b){
//  return a+b;
// };

// or we can also create function like this from Function class
const abc = new Function('a', 'b', 'return a + b');

// hence abc is an instance of Function Class
abc.constructor === Function // true
abc.__proto__ === Function.prototype // true
abc instanceof Function // true


// Function Class inherits properties from Object Class
// i.e Function Class gets its methods from Object.prototype

// Same logic exists for other non-primitive types since they all directly or indirectly 
// inherit from Object Class
// and at the top of the tree is "null"

// null==>Object====>Function====> instance
// null==>Object====>Array====> instance
// null==>Object====>Number====> instance
// null==>Object====>{Any NonPrimitive Class}====> instance