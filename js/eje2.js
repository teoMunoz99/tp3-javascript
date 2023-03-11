/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
 cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let ciudades = [], ciudad;

while(true){
    ciudad = prompt("Ingrese el nombre de una ciudad: ");

    if( ciudad === null){
        break;
    }else{
        ciudades.push(ciudad);
    }
}

//Mostrar el arreglo generado
console.log("Las ciudades ingresadas son: " + ciudades);
//Mostrar la longitud del arreglo.
console.log("La longitud del arreglo es: " + ciudades.length);
//Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write("Item primera posicion: " + ciudades[0] + "</br>");
document.write("Item tercera posicion: " + ciudades[2] + "</br>");
let posicion = (ciudades.length - 1);
document.write("Item ultima posicion: " + ciudades[posicion] + "</br>");

//Añadir paris a la ultima posicion
ciudades.push('paris');

//Escribe por pantalla el elemento que ocupa la segunda posición.
document.write("Elemento que ocupa la segunda posicion: " + ciudades[1]);

//Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
console.log("Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona': ");
ciudades.splice(1,0,`Barcelona`);
console.log(ciudades);