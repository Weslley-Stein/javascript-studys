function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    Object.defineProperty(this, 'stock',{
        enumerable: true, 
        configurable: false,
        get: function () {
            return stock;
        },
        set: function(value){
            if(typeof value !== 'number'){
                throw new TypeError('Insert just numbers');
            }   
        }
    })
    
}

const p1 = new Product('T-shirt', 20, 3)
console.log(p1)
console.log(p1.stock)