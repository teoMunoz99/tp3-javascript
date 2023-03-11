/*1- Escribir el código de una función a la que se pasa como parámetro un número entero y
 devuelve como resultado una cadena de texto que indica si el número es par o impar.
 Mostrar por pantalla el resultado devuelto por la función. */

let entero = 3;

const descubrirParidad = function(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if(descubrirParidad(entero)){
    console.log("El numero es par");
}else{
    console.log("El numero no es par");
}