function carDetails() {
    // private property
    let kms = 0;
    // private property
    let speed = 0;
    // public property
    this.speedUp = (intialSpeed) => {
        speed += intialSpeed;
        kms += speed;
    };
    // public
    this.totalkmsDriven = () => kms;
}
  
let car_object = new carDetails();
car_object.speedUp(7);
car_object.speedUp(9);
console.log(car_object.totalkmsDriven());
  
// Undefined, since it is made private:
console.log(car_object.kms);