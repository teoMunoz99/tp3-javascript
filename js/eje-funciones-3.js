/*3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
 luego crear una función para calcular su perímetro y mostrarlo por pantalla.
    La fórmula del perímetro  es p = 2*(a +b)
 */

function perimetro(lado1, lado2){
    return ((lado1 + lado2)*2);
}

let cateto1 = parseFloat(window.prompt("Ingrese la base del rectangulo: ")), cateto2 = parseFloat(window.prompt("Ingrese la altura del rectangulo: "));

let resultado = perimetro(cateto1, cateto2);

console.log("El perimetro es: " + resultado);