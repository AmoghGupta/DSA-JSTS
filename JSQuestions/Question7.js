var [first, second, third] = ["Laide", "Gabriel", "Jets"];

// is equivalent to
// var first = "laide",    second = "Gabriel",    third = "Jets";

//----------------------------------------------------------------------------------------
var [1, 2, 3] = ["Laide", "Ola", "Jets"]; 
// wrong, numbers cannot be used for destructuring

//----------------------------------------------------------------------------------------
var thing = ["Table", "Chair", "Fan"];
var [a, b, c] = thing;
// a = "Table" b = "Chair" c="Fan"

//----------------------------------------------------------------------------------------
var first, second;
[first, second] = ["Male", "Female"];
//----------------------------------------------------------------------------------------

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, ...rest] = ["Mercury", ...planets];

//----------------------------------------------------------------------------------------
var a, b;
[a, b] = ["Male", "Female"];
[a, b] = [b, a];
