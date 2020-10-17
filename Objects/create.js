//Object.create()
//The Object.create() method is used to create a new object and link it to the prototype of an existing object.

//exisitng object
var job1 = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";
        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
} 

//created a new object
// Use Object.create to pass properties
// linked it to the prototype of an existing job1 object.
const barista = Object.create(job1);