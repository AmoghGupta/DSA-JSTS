// use for comparing  custom types:
// instanceof of returns true if an object is created from a given constructor and false otherwise. 

var ClassFirst = function () {};
var ClassSecond = function () {};
var instance = new ClassFirst();

instance instanceof Object; // All non-primitive objects are instances of Object , so that'll always return true .
instance instanceof ClassFirst; // true
instance instanceof ClassSecond; // false 