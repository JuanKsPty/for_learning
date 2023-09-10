
class Person {
    constructor(name) {
    this.name = name;
    }
    walk() {
        console.log(`me llamo ${this.name} y estoy caminando}`);
    }
}

let user1 = new Person('Maria')
console.log(user1)
user1.walk()