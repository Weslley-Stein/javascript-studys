//defineProperty - defineProperties
function Product(name, price, stock) {
    //Object.defineProperty(referenceObject, nameOfAttribbute,{properties})
    Object.defineProperty(this, 'stock',{
        enumerable: true, //thats show the Key
        value: stock, // value of key
        writable: false, //can modify value of the key or not
        configurable: false // can reconfigure the key or not
    })
    //Object.defineProperties is looks like -defineProperty, the diferrence between is: 
    //defineProperties can make multiples attributes
    Object.defineProperties(this,{
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configureable: false
        }
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configureable: false
        }
    })
}