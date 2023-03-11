/*2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa,
 la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

 let texto = 'hOla CoMo eStAas';

 const infoCadenas = function(cadena){
    if(cadena === cadena.toUpperCase()){
        console.log("La cadena solo esta formada por mayúsculas");
    }else if(cadena === cadena.toLowerCase()){
        console.log("La cadena solo esta formada por minusculas");
    }else{
        console.log("La cadena esta formada por mayusculas y minusculas");
    }
 }

 console.log(infoCadenas(texto));