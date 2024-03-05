/*---------------------------------------BOUCLES---------------------------------------- */

// Les Boucles sont des structures permettant d'executer plusieurs fois des instructions
// La principale difference entrr "for" et "while"
// 'for' est géneralement utilisé lorsque le nombre d'itéraions connu à l'avance
// "while" est utilisé lorsque le nombre d'itérations est connu à l'avance et dépend d'une condition specifique

// Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10 .
// Le programme doit ensuite dessiner un sapin de noel composé d'etoiles(*)
// *
// **
// ***
// ****
// *****

// const repetitions = prompt("saisir un nombre entier compris entre 1 et 10");

// while (repetitions < 1 || repetitions > 10) {
//   repetitions = prompt("saisir un nombre entier compris entre 1 et 10");
// }

// let stars = "";
// for (let i = 0; i < repetitions; i++) {
//   stars = stars + "*";
//   console.log(stars)
// }

// Boucle for(){...}
// Boucle qui affiche les nombres de 10 à 20
for (let i = 10; i <= 20; i++) {
  if (i % 2 == 0) console.log(i);
}

// boucle : while (){...}
// afficher les nombres pairs de 10 à 20
let i = 0;
while (i <= 20) {
  console.log(i);
  i = i + 2;
}

// demandez un nombre à l'utilisateur tant que ce nombre n'est pas le bon dites le nombre est le plus grand ou le nombre est le plus petit

let userInput = prompt("Donne moi un nombre");
let magicNumber = 99;


while (userInput != magicNumber) {
  if (userInput < magicNumber) {
    userInput = prompt("Donne moi un autre nombre plus grand");
  } else {
    userInput = prompt("Donne moi un autre nombre plus petit");
  }
}
console.log('bravo, le nombre etait ' + magicNumber);
