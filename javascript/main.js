// ? ECMAScript 6 | CASE SENSITIVE

let num1 = 1; // ? SCOPE | AMBITO DE UNA VARIABLE | ALCANCE

/**
 * ! Un identificador no deberia
 * ! usar como caracteres iniciales un numero
 * ! signos de puntuacion ni caracteres latinos
 * ! caracteres en blanco
 */

let firstName = "Pepito";
let lastName = "Perez";

const ID = 0;

let fullName = `${firstName} ${lastName}`;

// console.log(fullName);

let age = 45;

if ((age >= 18 && age <= 25) || (age >= 40 && age <= 50)) {
    console.log("Entre mijo!");
} else {
    console.log("Yaper!");
}

greeting(); // ? Hoisting

// ? Standard function
function greeting() {
    console.log("Hola primer mundo cruel");
}

// ! Arrow function DOESN'T HAVE HOISTING
const greeting2 = () => {
    console.log("Hola segundo mundo cruel");
};

greeting2();

function CustomGreeting(name = "usuario") {
    console.log(`Hola ${name}`);
}

function add(a, b) {
    return a + b
}

console.log(`la suma es: ${add(5, 6)}`);


CustomGreeting();
CustomGreeting("Fulanito");