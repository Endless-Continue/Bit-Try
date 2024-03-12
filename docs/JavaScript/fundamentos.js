/*
este 
es un
mensaje
con 
varias 
lineas
*/
/*Input shit*/
/* let entrada = prompt()
entrada = prompt("Escriba su nombre")
console.log(entrada) */
/*Output shit
alert("buenas noches")
console.log("mensaje a la consolita buenos dias")
document.write("mensaje en interfaz de usuario")
*/
/* variables */
//declaraciones
/* saludo1 = "Mono"
var saludo2 = "mono2"
var saludo30 = "monosexo"
let saludo3 = "mono3"
const saludo4 = "mono4"
console.log(saludo1)
console.log(saludo2)
console.log(saludo30)
console.log(saludo3)
console.log(saludo4) */
/* ambito de las variables(diferencias de let y var(nunca usar var)) */
/*
let variableGlobal = "variable global"
console.log(variableGlobal)
{
let variableLocal = "variable local"
console.log(variableLocal)
}
*/
//diferencias let y const (const es un valor constante que no puede ser cambiado o variado por otra variable)
/* let numero1 = 1
const numero2 = 2
numero1 = "1"
//numero2 = "2"

console.log(numero1)
console.log(numero2) */

/*modo estricto(esto es para usar siempre una variable como let o const*/
//"use strict"

/* Tipos de dato primitivos */

// string

let miVariable = "";
miVariable = "este es un texto de 'ejemplo 1'";
miVariable = 'este es un texto de "ejemplo 2"';
miVariable = `este es un 'texto' de "ejemplo" 3`;

// number
miVariable = 10;
miVariable = 9.5;
miVariable = 0xff;
miVariable = 123e5;

// boolean
miVariable = true;
miVariable = false;

// undefined
/* let miVariableSinAsignacion;
console.log(miVariableSinAsignacion); 
 console.log(miVariable);*/

/* Operador typeof*/
/*
console.log(typeof miVariable);

usado para ver que tipo de dato es
*/

/* Conversion de tipos*/ // parseint/Number o parseFloat para decimales
// string, .tostring para convertir a string
/* let numero1 = "1";
let numero2 = "2";
let numero3 = "3";
let resultado = numero1 + numero2 + numero3;
console.log(resultado);
numero1 = Number(numero1);
numero2 = parseInt(numero2);
numero3 = +numero3
resultado = numero1 + numero2 + numero3;
console.log(resultado);

//DECIMALES
let numeroDecimal1 = "1.5"
let numeroDecimal2 = "2.5"
let numeroDecimal3 = "3.5"
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado);
numeroDecimal1 = parseFloat(numeroDecimal1);
numeroDecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3);
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado);

//TRANSFORMAR A STRING

let telefono = 555;
let codigoPais = 57;
console.log(telefono);
console.log(codigoPais)
telefono = String(telefono)
codigoPais = codigoPais.toString()
console.log(telefono)
console.log(typeof telefono)
console.log(codigoPais)
console.log(typeof codigoPais)
console.log("numero completo:", codigoPais + telefono)
 */

/* Expresiones booleanas */
// Truthy o verdaderos
/* console.log(true)
console.log(1)
console.log(-1)
console.log("a") */
// Falsy o falsos
/* console.log(false)
console.log(0)
console.log("")
console.log(undefined)
console.log(null) */

/* Control de flujo */
// Condicionales
/* if (true) {
  console.log("se cumple la condición 1")
}

if (false) {
  console.log("se cumple la condición 2")
} else {
console.log("no se cumple la condición 2")
}

if (false) {
  console.log("se cumple la condición 3 a")
} else if (true) {
  console.log("se cumple la condición 3 b")
} else {
console.log("no se cumple la condición 3")
}

if (false) {
  console.log("se cumple la condición 4")
}
if (true) {
  console.log("se cumple la condición 5")
} */

/* const perfil = "profesor"

 switch (perfil) {
    case "estudiante":
    console.log("eres un estudiante")
    break;
    case "profesor":
    console.log("eres un profesor")
    break;
    default:
        console.log("perfil no permitido")
 }*/

/* Operadores */
//-Concatenacion
/* console.log("pepita" + " " + "perez"); */

//-Aritmeticos
/* console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(10 % 3);
console.log(2 ** 3); */

//
/* miVariable = 3;
console.log(miVariable);

/* Incremento */
/* miVariable++;
console.log(miVariable); */

/* Decremento */
/* miVariable--;
console.log(miVariable);  */

//-Asignacion

/* let numero1 = 8;
let numero2 = 4;
let resultado = numero1 + numero2
resultado += 3;
// es lo mismo a: //
resultado = resultado + 3;
resultado *= 2;
resultado /= 3;
resultado %= 2
resultado -= 2;
resultado **= 2;
console.log(resultado); */

//-Comparacion

/* console.log(8 == 4);
console.log(8 === 4);
console.log(8 == 8);
console.log(8 === 8);
console.log(8 == '8');
console.log(8 === '8');
console.log('8' === '8');
console.log('pepita' === 'Pepita');
console.log(8 != 4);
console.log(8 != '8');
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4); */

//Logicos
/* 
console.log(true && true);
console.log(true && false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);
//de negacion
console.log(!true);
console.log(!false); */
