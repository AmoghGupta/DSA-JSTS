Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
      fn.apply(context, [...args1, ...arg2])
  }
};


let basic = {
    'name': 'shyam',
    'age': 24
};
function callMe(city) {
  console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0]);
}

callMe.mybind(basic,'kanpur')();