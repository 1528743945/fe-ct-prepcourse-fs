/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
  return array [array.length -1];
}
function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      array[i] = array [i] + 1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
  return palabras.join(" ");
  
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   if (array.includes(elemento)) {
      return true;
   } else return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce(function(acum, elemento){
      acum= acum + elemento
      return acum
   })
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var result = resultadosTest.reduce(function(acum, elemento){
      acum= acum + elemento
      return acum
   })

   return result / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var numeroMasGrande = -Infinity
   arrayOfNums.forEach(function (elem){
   if (elem > numeroMasGrande) numeroMasGrande = elem
   });
   return numeroMasGrande;

   //opcion 2
   // let numeroMasGrande = -Infinity;
   //for(let i = 0); i < arrayOfNums.length ; i++{
   // if (arrayOfNums[i] > numeroMasGrande){
   // numeroMasGrande = arrayOfNums[i]}}  
   // return numeroMasGrande;

   //opcion 3
   //return Math.max(...arrayOfNums) estos 3 puntos son para que se copien los datos del array pero sacandolos del array, es muy importante en este caso para que funcione el metodo.
}

function multiplicarArgumentos() { 
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
  if (arguments.length === 0) return 0
  var total = 1
  for (var el of arguments)  {
   total = total * el
  }
  return total

  //oprcion 2
  //if (arguments.length === 0){return 0;}
  //else {
  //let resultado = 1;
  //for (let i= 0; i<arguments.length; i++){
  //resultado = resultado * arguments[i];
  //}
  // return resultado;
  // }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;

   array.forEach(function(ele){
      if(ele > 18){
         contador = contador + 1;
      }
   })
   return contador;

   //opcion 2
   //var contador = 0;
   // for (let i= 0; i < array.length; i++){
   //if (18 < array[i]){contador++}
   //}
   //return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia== 1|| numeroDeDia == 7) {
      return "Es fin de semana"
   } else return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   //opcion 1
   //return num.toString().starWith('9');
   //opcion 2
   return num.toString()[0]==='9' ? true : false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   //var primero = array[0];

   //for (var i = 0; i < array.length; i++){
   //   if (primero !== array[i]){
   //      return false
     // }
   //}
   //return true;

   //opcion 2

   return array.every(elem => elem === array[0]);
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   //let arrayNew = [];

   //array.forEach(function(ele){
   //   if (ele==="Marzo" || ele==="Enero" || ele === "Noviembre"){
   //      arrayNew.push(ele);
    //  }
   //})
   //return arrayNew;

   //opcion 2
//const mesesPerdidos = ["Enero", "Marzo", "Nobiembre"];
//const mesesEncontrados = array.filter((mes => mesesPerdidos.includes(mes)));
//if (mesesEncontrados.length === mesesPerdidos.length) return mesesEncontrados;
//return "No se encontraron los meses pedidos";

//opcion 3
var meses= [];
array.forEach(function(mes){
   if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") { meses.push(mes); }
})
if (meses.length === 3){ return meses;}
else {return "No se encontraron los meses pedidos"; }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
    var array = [];
    for(var i = 0; i <= 10; i++){
      array.push(6 * i);
    }
    return array;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
var nuevoArray = [];
for (var i = 0; i< array.length ; i++){
   if (array[i] > 100){
      nuevoArray.push(array[i]);
   }
}
return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
