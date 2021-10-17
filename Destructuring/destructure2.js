let employee = {
    "skill":"high",
    "location":"Hyderabad",
    "collegegrade":"average",
};

//acting as rest(collector)
let {collegegrade, ...employee1} = employee;

console.log(employee1); //{ "skill":"high","location":"Hyderabad"};

console.log(employee.hasOwnProperty('collegegrade')) //false

