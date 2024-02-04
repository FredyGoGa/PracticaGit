1/**
 * -se debe mantener la convencion camelcase 
   -se puede inicial el  nombre de una variable con mayuscula
   -se puede con signo pesos
   -no se puede usar caracteres especiales excepto $ , _
 */


const nombreDeLaVariable = "nombre"



const Variable = "nombre1"
const variable = "nombre2"
const _nombre = "nombre3"
const $nombre = "nombre4"
const nombre$ = "nombre5"

// Números
let edad = 25;
let pi = 3.14159;


// Booleanos
let esMayor = true;
let esActivo = false;

// Arreglo
let numeros = [1, 2, 3, 4, 5];

// Objeto
let persona = {
    nombre: "Juan",
    edad: 25,
    esEstudiante: true
};

// Función
function sumar(a, b) {
    return a + b;
}

// Null y undefined
let valorNulo = null;
let valorIndefinido;


// Ámbito global
let variableGlobal = "Soy global";

function funcionEjemplo() {
    console.log(variableGlobal); // Puedo acceder a la variable global desde aquí
}

funcionEjemplo();
console.log(variableGlobal); // También puedo acceder a la variable global aquí



function funcionEjemplo() {
  // Ámbito local
  let variableLocal = "Soy local";
  console.log(variableLocal); // Puedo acceder a la variable local aquí
}

// console.log(variableLocal); // Esto generaría un error, la variable local no está definida aquí

funcionEjemplo();

