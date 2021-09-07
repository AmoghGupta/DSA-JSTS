class Car {
    constructor() {
       this.wheels = 4
       this.doors = 4
       this.topSpeed = 100
       this.feulCapacity = "400 Litres"
    }
    setWheels(w) {
       this.wheels = w;
       return this;
    }
    setDoors(d) {
       this.doors = d;
       return this;
    }
    setTopSpeed(t) {
       this.topSpeed = t;
       return this;
    }
    setFeulCapacity(fc) {
       this.feulCapacity = fc;
       return this;
    }
    displayCarProps() {
       console.log(`Your car has ${this.wheels} wheels,\
       ${this.doors} doors with a top speed of ${this.topSpeed}\
       and feul capacity of ${this.feulCapacity}`)
    }
 }

 let sportsCar = new Car()
   .setDoors(2)
   .setTopSpeed(250)
   .setFeulCapacity("600 Litres")
   .displayCarProps()