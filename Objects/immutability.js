const mytesla = {
    maxSpeed: 250,
    batteryLife : 300,
    weight: 123
};

// prevents the addition of new properties
Object.preventExtensions(mytesla);
mytesla.color = 'blue';
console.log(mytesla.color);


//prevents addition or deletion of properties
Object.seal(mytesla);
delete mytesla.batteryLife; //false
console.log(mytesla.batteryLife)

// prevents addition deletion and modification of properties
Object.freeze(mytesla);
mytesla.batteryLife = 400;
console.log(mytesla.batteryLife)

