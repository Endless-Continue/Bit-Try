"use strict";
//hacer que salude
//console.log("hola")
//document.write("hola2")
/* Escribir su nombre
const nombreUsuario = prompt("Escriba su nombre")

console.log(nombreUsuario) */

/*saludar con nombre usando switch y if else

const entrada = prompt("ingrese su nombre");



  switch(entrada){
    case "":
        document.write("Welcome!");
    break
    case entrada:true
         document.write("Hello " + entrada + " Welcome");
         break}
 */

/* if(entrada){
    document.write("hola! " + entrada + " welcome")
}
else {
    document.write("hola bb")
}*/

/* prubitas exoticas adjasdasjdasjd */

/* const entrada = prompt("Ingresa tu nombre:");

if (entrada) {
  if (entrada.toLowerCase() === "javi") {
    document.write("Epa");
  } else {
    document.write("Hola! " + entrada + " bienvenido");
  }
} else {
  document.write("Hola perro");
} */

// Hacer un programa que pida dos numeros al usuario y los sume

/* let entrada1 = prompt("Ingrese un numero")
let entrada2 = prompt("Ingrese un segundo numero")

entrada1 = Number(entrada1)
entrada2 = Number(entrada2)

let resultado = entrada1 + entrada2

document.write("La suma de los numeros es: " + resultado) */

//Hacer un programa que pida y muestre nombres y apellidos

/* let userName1 = prompt("Ingrese sus nombres")
let userName2 = prompt("Ingrese sus apellidos")

let resultado = userName1 + " " + userName2

document.write("Hola! " + resultado + " bienvenido") */

//DESAFIO COMPLETADO YO SOY LA MONDA

/* Interpolacion de variables: aca usas ``(altgr + cerrar }) para concatenar mas rapido
const nombre6 = prompt("ingresa nombre");
const nombre7 = prompt("ingresa apellido");
document.write(`${nombre6} ${nombre7}`)*/

// Hacer  un programa que reciba del usuario un numero y muestre si es cero, de otra manera que muestre si es positivo o si es negativo

/* let num1 = Number(prompt("Ingrese un numero"))

if (num1 == 0) {
  document.write(`el numero es cero`);
} else if (num1 > 0) {
  document.write(`el numero ${num1} es positivo`);
 } else {
  document.write(`el numero ${num1} es negativo`);
 } 
 */

//Hacer un programa que reciba  del usuario 2 numeros y muestre cual es el numero mayor y cual es el numero menor

let num2 = parseFloat(prompt("Ingrese un numero"));
let num3 = parseFloat(prompt("Ingrese otro numero"));

if (num2 < num3) {
  document.write(`el numero ${num3} es mayor y el numero ${num2} es el menor`);
} else if (num2 > num3) {
  document.write(`el numero ${num2} es mayor y el numero ${num3} es el menor`);
} else {
  document.write("Los numeros son iguales");
}

// if NaN
/* 
if (isNaN(numero)) {
  document.write('El valor ingresado no es un número');
  */
