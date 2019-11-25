var ejemplo = ["hola", 2, true, {}]

var miArray = [1, 2, 3, 4]

console.log(miArray)

console.log(miArray[0]) /*"hola"*/

console.log(miArray.lenght) /*la cantidad de elementos que tiene el array*/

console.log(miArray[miArray.lenght]) /*el último elemento del array*/

console.log(miArray[miArray.lenght-1]) /*el anteultimo elemento*/

miArray.forEach(function(elemento){
    console.log(elemento+2)
}); /*para cada elemento del array, ejecutar tal función*/

var miArrayString = ["como estas", "asdfsadf", "gato"]

for (var i = 0 ; i < miArrayString.lenght ; i++) {
    console.log("hola" + miArray[i])
}
var miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var resultado = miArray.filter(word => word%2==0); /* mostrar los elementos pares, filtrar los elementos impares de la lista*/

var resultado2 = miArray.filter(function(elemento){
    return elemento%2==0
}) 
/*igual a la función anterior pero sin la flecha, sino del modo que estamos acostumbrados para comparar*/

console.log("Arrow function ",resultado)
console.log("Sin Arrow function ",resultado2)

//INDEX OF: me muestra el índice 
console.log(miArray.indexOf(9)) /*¿está el número 9 en el array? ¿en qué índice?*/