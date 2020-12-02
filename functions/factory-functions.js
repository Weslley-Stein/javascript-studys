//Factory functions is an fatory that returns a Object
function createPerson(name, surname, height, weigth) {
  return {
    name,
    surname,
    get completeName(){
        return `${this.name} ${this.surname}`
    },
    //The set is useful for insert value inside a Object our Method
    set completeName(value){
        const newName = value.split(' ')
        this.name = newName.shift();
        this.surname = newName.pop();
        return this.name + this.surname
    },
    //When we have an function inside a object, that is called "method"
    speak(subject) {
      return `${this.name} is speaking about ${subject}`;
    },
    height,
    weigth,
    //When you use get before an method that will transform this in a attribute, that is
    //Called "Getter"
    get imc() {
      const imcResult = this.weigth / (this.height ** 2);
      return imcResult.toFixed(2);
    },
  };
}
//Operator this: the operator "this" is useful for autoreference, when you use "this.name"
//We are saying "Hey, get the -value- of the key -name- of -this- object"

const p1 = createPerson("Weslley", "Stein", 1.6, 60);
console.log("Object Structure:", p1);
console.log(p1.speak("soccer"));
console.log(`Your Imc is: ${p1.imc}`);
console.log(`Your Complete name is: ${p1.completeName}`);
console.log(`Your new Complete Name is: ${[p1.completeName = 'Pablo Fernandes']}`)
console.log(`Your new First Name is: ${p1.name}`)
console.log(`Your new Surname Name is: ${p1.surname}`)
console.log("New Object Structure:", p1);

/* const p2 = createPerson('Julia', 'Facundo', 170, 60)
console.log(p2)
console.log(p2.speak('Physics')) */
