let employee = {
    "skill":"high",
    "location":"Hyderabad",
    "collegegrade":"average",
};


let {collegegrade, ...employee} = employee;

console.log(employee); //{ "skill":"high","location":"Hyderabad"};

console.log(employee.hasOwnProperty('collegegrade')) //false

