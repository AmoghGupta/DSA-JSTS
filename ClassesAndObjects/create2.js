function Person(name, age) {
    this.name = name;
    this.age = age;
}

const me = new Person('Joe', 20);

let obj =Object.create(me);

console.log(obj.name);