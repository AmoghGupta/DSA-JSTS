
// if we don’t know how many iterations are needed. To solve this problem, 
// it is enough to create an infinite loop in the function generator.
// The example below demonstrates this for a function that returns a random number. 

function * randomFrom(...arr) {
    while (true)
    yield arr[Math.floor(Math.random() * arr.length)];
}
  
const getRandom = randomFrom(1, 2, 5, 9, 4);
  
getRandom.next().value; // returns random value