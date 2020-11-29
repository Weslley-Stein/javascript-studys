const person = {
    name: 'luiz',
    surname: 'Miranda',
    age: 30,
    height: 175,
    address: {
        street: 'Av Brazil',
        number: 320 
    }
}
//Most common method to atribuition
const name = person.name;

//Destructuring atribuition
const { age } = person; 
//Looks how this work, he take the attribute -age- of object -person- and make an variable
//with the same name of attribute, something like: const age = person.age -> { age } = person

//Multiple Destructuring
const { surname, height} = person;

//Rename a attribute
const {age: age1} = person;
//select the current attribute name -age- and rename with -age: newName-

//Default value for undefined attributes
const { sex = '' } = person;

//destructuring multiples objects
const { address: { street, number } } = person;
console.log(street, number)

