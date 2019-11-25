/*1) Definir un array de números del 1 al 20. Utilizando el método forEach,
imprimir en consola sólo aquellos que sean múltiplos de 7.*/

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

numeros.forEach(function(elemento){
    if (elemento%7==0) {
        console.log(elemento)
    }
})

/*2) Realizar el ejercicio 1 con un for.*/

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i]%7==0) {
        console.log(numeros[i])
    }
}

/*3) Realizar el ejercicio 1 con un while. */
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var i = 0;
while (i < numeros.length){
    if (numeros[i] %7 == 0) {
        console.log(numeros[i])
    }
	i++
}

/*4) Utilizando el array del ejercicio 1 implementar la función map de tal forma de obtener un arrayResultado con la raíz cuadrada de c/u de los números. Utilizar la función Math.sqrt para esto. */

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var cuadrado = numeros.map(function(num) {
    return Math.sqrt(num)
 });

/*5) Un detective recibió un código anónimo cuyo mensaje quiere descifrar. 
Acudió a vos por ayuda; las únicas pistas que recibió fueron: filter y typeof. 
¿Podrás ayudarlo? */
var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6]; 

var codificacion = enigma.filter(function(elemento){
    console.log
}) 

typeof(enigma)