/*4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
 la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario. */

const tablaMultiplicar = function(numero){
    for(let i = 1; i <=10; i++){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

let numero = parseFloat(prompt("Ingrese un numero para ver su tabla de multiplicar: "));

console.log(tablaMultiplicar(numero));