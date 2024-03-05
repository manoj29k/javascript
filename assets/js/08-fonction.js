/*--------------------------------------- FONCTIONS ---------------------------------------- */

/* 
    un fonction est bloc de code réutilisable 
    qui peut être appelée à partir  d'autres parties  de votre code pour effectuer une tache spécifique.
    Les fonctions sont un moyen utile de segmenter votre code en taches plus petits et plus facile à gérer,
    elles permettent de réutiliser le meme code plusieurs fois  sans avoir à le copier coller
*/

//  Déclaration de Function
function hello(firstName, lastName) {
  console.log("Bonjour " + firstName + " " + lastName);
}

hello("manoj", "kumar");

// Déclarer une fonction qui prend 3 parametre
// declare un variable TVA à 20%
// elle multiplie les 3 nombre et la TVA
// récupere le résultat dans une variable
// appelez la fonction

function num1(x, y, z) {
  const tva = 0.2;
  const result = x * y * z * tva;

  return "ok";
}
const result = num1(145, 28, 36);
console.log(result);

// Il est possible de savegarder une fonction dans une variable
// On les appelle des fonctions anonymes
const math = function (x, y) {
  return x * y;
};
math(3, 5);

// fonction addition 
const add = function (x, y) {
    
}
const toto = add(3, 5);
console.log(toto)

// Arrow function  (fonction fléché)
const divide = (x, y) => {
  return x / y
}
const resultat = divide(10 / 2)
console.log(resultat)
const arrow = x => x * 2
 
// crée une fonction fléché helloYou avec un parametre qui affiche Bonjour + le nom
const helloYou = Manoj => {
    console.log('Bonjour ' + Manoj)
}

helloYou('kumar')

// Demander à l'utilisateur d'entrer un nombre
// Creer une fonction fléché qui prend en parametre un nombre
// et qui affiche dans le console si le nombre est pair ou impair(modulo)
// Appler la fonction en lui passant le nombre 5 en parametre
// Apper la fonction en lui passant le nombre 256 en parametre


// const number = prompt('saisir un nombre');
// const isEven = (number) => {
//   return number % 2 === 0 ? 'le nombre est pair' : 'le nombre est impair';
// };
// console.log(isEven(number));


// Correction
const userInput = prompt('saisir un nombre');

const evenOdd = (x) => {
  if (x % 2 == 0) {
    console.log('le nombre est pair');
  } else {
    console.log('le nombre est impair');
  }
}

// evenOdd(userInput)

// Transformez en fonction le jeu du fizbuzz

const num = prompt('saisir un nombre')

function fizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    console.log(reponse)
  }
}
console.log(fizzBuzz(num))
