//the attribute __proto__ is like a parent attribute, all objects have this attribute
//and your methods, we can include news attributes inside __proto__
function dummyObjects(name, age){
    this.name = name
    this.age = age
}

const dummyObject1 = new dummyObjects('Pablo', 30) 

dummyObjects.prototype.newMethod = function () { return 'new method created' }
dummyObjects.prototype.nameWeWantForNewAttribute = 'Value we want for this key'

console.log(dummyObject1)
console.log(dummyObject1.nameWeWantForNewAttribute)
console.log(dummyObject1.newMethod())

//Looks what we make, we insert a new attribute at __proto__ constructor function
// and "dummyObject1" Inherited this because all instance and objects Inherit __proto__

