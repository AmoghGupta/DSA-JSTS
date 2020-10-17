// arr.reduce(callback, initialValue);

//reduces array to single value
var numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}
numbers.reduce(myFunc);