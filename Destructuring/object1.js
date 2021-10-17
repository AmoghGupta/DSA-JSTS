
// if you have a code like this:
const name = 'David';
const obj = {
 name: name,
 display: function () {
  return 'Welcome, ' + this.name;
 }
};
console.log(obj.display());

// then in ES6, you can simplify it as shown below:

const name = 'David';
const obj = {
 name,
 display() {
  return `Welcome, ${this.name}`;
 }
};

console.log(obj.display());