//  Index's:      0        1        2          3        4
const names = ['Mary', 'John', 'Eduardo', 'Gabriel','Julia']
//The first argument is the start point of splice method in the array names
//The second is the quantity of element we want to remove
//Exemple: if we use names.splice(1,3) we will take "Johh, Eduardo and Gabriel"

//The third is the value we want to put in the array names

//Exemple: names.splice(0, 2, 'Weslley') the result is:
//['Weslley', 'Weslley', 'Eduardo', 'Gabriel', 'Julia']

//our names.splice(0,2, 'Weslley', 'Stein'), result:
//['Weslley', 'Stein', 'Eduardo', 'Gabriel', 'Julia']


names.splice(4,1)
console.log(names)