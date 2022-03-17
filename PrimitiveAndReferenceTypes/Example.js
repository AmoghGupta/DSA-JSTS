var id = 20;
var id2  = id;
id2 = 30;
console.log("id:",id);
console.log("id2:",id2);
var user = {name:'Smith',password:123}
var user2 = user;
user2.name = 'James';
console.log("user:",user);
console.log("user2:",user);


// O/p
// id: 20
// id2:30
// user:  {name:'James',password:123}
// user2: {name:'James',password:123}

//This same behavior happens with all primitive and reference type variables.