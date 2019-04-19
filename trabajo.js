// EJERCICIO 1 //

var a = 3;
var b = 7;

var resultado = a + b

console.log(resultado)

// EJERCICIO 2 //

var d = 8;
var f = 5;

var resultado = d - f

console.log(resultado)

// EJERCICIO 3//

var g = 12;
var h = 3;

var resultado = g / h

console.log(resultado)

// EJERCICIO 4 //
var resultadoCuatro = g * h

console.log(resultadoCuatro)

// Booleans 

 // 1. Tenemos que crear algunas variables para que el siguiente programita de el resultado espeardo.
 //Agregá las variables necesarias asignando el valor booleano correcto.

 var jsEsLoMas = true;
 var supermanMejorQueBatman = false;
 var calculoCorrecto = true;
 var pentagonoCon6Lados = false;



console.log("¿Javascript es el mejor lenguaje?", jsEsLoMas);
console.log("¿Es Superman mejor que Batman?", supermanMejorQueBatman);
console.log("¿Es 1 + 1 = 2?", calculoCorrecto);
console.log("¿Un pentágono tiene 6 lados?", pentagonoCon6Lados);

//Calculador de impuestos
//2. Un negocio necesita un programa para calcular cuantos necesita sumar de impuestos a una compra.
//El porcentaje de impuestos es del 15% sobre el precio del producto.

var producto = "Eloquent Javascript";
var precio = 390.5;
var impuestos = precio * 15/100 ;
var cantidad = 2
var total = (precio + impuestos) * cantidad;

console.log("Producto vendido: " + producto);
console.log("Precio: $" + precio);
console.log("Impuestos: $" + impuestos);
console.log('Cantidad vendida:' + cantidad)
console.log("Total: $" + total);

// 3. El mismo negocio del ejercicio anterior nos pide que agreguemos una variable cantidad para indicar la cantidad que se vendió de ese producto. 
// ¿Qué cambio harías en el calculo de la variable total para implementar el nuevo pedido del cliente?


// 4.Guardar en la variable resto el resto de dividir 11 por 3, utilizando el operador módulo o resto (%).

var resto = 11 % 3

console.log(resto)

// 5. Tenemos tres números, que vamos a representar con las variables a, b y z, y queremos mostrar el resto de dividir la variable a por 3, la variable b por 5 y la variable c por 8. 
//Completá el código para mostrar el resultado esperado.

var a = 9;
var b = 17;
var c = 38;

var restoDeADividaPor3 = a % 3; 
var restoDeBDividaPor5 = b % 5; 
var restoDeCDividaPor8 = c % 8 ; 

console.log("El resto de dividir a por 3 es ", restoDeADividaPor3);
console.log("El resto de dividir b por 5 es ", restoDeBDividaPor5);
console.log("El resto de dividir c por 8 es ", restoDeCDividaPor8);


// OPERADORES

var numero = 1;

numero += 5

console.log('Operador suma:' + numero)

// 6. Cambiar el siguiente código para poder utilizar el operar ++, y que muestre el número 100 en la consola.

var unNumero = 99;

unNumero++

console.log('Suma 100?:'+ unNumero);

// 7. Completar el siguiente fragmento de código, utilizando solo el operador ++, para mostrar el número 45 en la consola.




