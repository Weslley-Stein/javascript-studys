/* Object.values()
Object.entries()
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o,'prop')
... (spread)
Object.keys()//Return all keys of an object
Object.freeze()//Freeze an object
Object.defineProperty()//Define one property
Object.defineProperties()//Define various properties */

//Copy objects
const product = {name: 'shoes', price: 1.8};
const productCopy = {...product};

productCopy.name = 'Pants';
productCopy.price = 2.6;

console.log(product)
console.log(productCopy)

