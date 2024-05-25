/* Ejercicio_1 Crea un array vacío, genera 10 números al azar y guardalos en un array.
mostrar en consola el reesultado del array */

/* Array */

const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50));
console.log("Array: ", numbers);

/* Array vacío */

let num = [];

num.push(5);
num.push(8);
num.push(10);
num.push(3);
num.push(6);
num.push(2);
num.push(4);
num.push(9);
num.push(7);
num.push(1);

console.log("Los números del arreglo son: ", num);


/* Ejercicio_2 El usuario deberá ingesar un string con varias palabras separadas por coma, 
y se debe convertir en un array */


let frutas = prompt('Ingresa 3 frutas que te gusten');
let new_frutas = [];
new_frutas.push(frutas);
console.log("Me gustan: ", new_frutas);
console.log(typeof(new_frutas));

let verduras = prompt ('Ingresa 3 verduras');
let new_verduras = [];
new_verduras.push(verduras);
console.log("Verduras: ", new_verduras);
console.log(typeof(new_verduras));

let listaCompras = new_frutas.concat(new_verduras);
console.log("Lista de compras: ", listaCompras);

/* usando ciclo for para agregar elementos string en un array */

/* let frutas = Array();
for (x = 0; x < 5; x++) {
    frutas[x] = prompt ('Ingresa tus 5 frutas favoritas');
}
console.log("Mis frutas favoritas: ", frutas);
console.log(typeof(frutas)); */


/* Ejercicio_3 De acuerdo al arreglo, imprime lo siguiente:
el arreglo ordenado de menor a mayor, muestra el numero menor y el numero mayor */

const number = [10, 40, 30, 20, 15, 5];
number.sort(function (a , b) {
    return a - b;
});
console.log("Arreglo ordenado de menor a mayor", number);

const minValue = Math.min (...number);
const maxValue = Math.max (...number);

console.log("El valor mínimo es: ", minValue);
console.log("El valor máximo es: ", maxValue);
