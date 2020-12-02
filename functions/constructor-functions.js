//Constructor Functions need to start with Upper Case letters
//The constructor functions automatically return an Object, you dont need to say "return { }"
//The constructor functions dont need to separate attributes and methods with Commas
function Person(name, surname){
    this.name = name;
    this.surname = surname;
    this.method = () => {
        console.log(this.name + ": i'm a method");
    }
}

const p1 = new Person('Weslley', 'Stein')
const p2 = new Person('Julia', 'Facundo')
p1.method()
p2.method()