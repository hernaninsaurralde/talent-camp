// arreglos, arrays, vectores []
//métodos básicos push, pop, unshift, shift, 
const arr = []
const arr2 = new Array(5) //no es recomendado
console.log(typeof arr2)
console.log(arr2)
arr.push("primer plato", "segundo plato")

console.table(arr)
arr.shift()
// arr.pop()
console.table(arr)
arr.unshift("tercer plato")
console.table(arr)

