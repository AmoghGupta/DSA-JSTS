// COMPOSITION
// Different abstractions offer specific functionalities that need to be combined with other objects to represent a bigger abstraction. 
// You can create an object from other smaller objects.
// With Composition, you can decide what functions to add to each object by using ES6 Object.assign().

const eat = function () {
    return {
        eat: () => { console.log('I am eating'); }
    }
}
const breathe = function () {
    return {
        breathe: () => { console.log('I am breathing'); }
    }
}
const swim = function () {
    return {
        swim: () => { console.log('I am swimming'); }
    }
}
const trick = function () {
    return {
        trick: () => { console.log('I am doing a trick'); }
    }
}
const superMagician = ()=> {
 return Object.assign(
     {},
     eat(),
     breathe(),
     trick()
   );
}
const noviceMagician = () => {
 return Object.assign(
     {},
     eat(),
     breathe(),
     swim()
   );
}

//Now, Harry can’t swim, and Liv can’t do tricks.

let harry = superMagician();
harry.eat();
harry.breathe();
harry.trick();
//I am eating
//I am breathing
//I am doing a trick
let liv = noviceMagician();
harry.eat();
harry.breathe();
harry.swim();
//I am eating
//I am breathing
//I am swimming