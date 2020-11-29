# Control Structures

## For 
we can use the Structure __for__ to go through an array and checkout all index
```js
const fruits = ['apple', 'strawberry', 'banana'];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
```

## For In
he's looks like a normal __for__ but here we dont need to make a count, automatically that will go through all index of arrays
```js
//#1
for(let index in fruits){
    console.log(fruist[index])
}
```

## For of
the difference between __For In__ and __For Of__ is __For In__ return the index of an Array, and __For Of__ return the Value
```js 
for(let fruit of fruits){
    console.log(fruit)
}
```