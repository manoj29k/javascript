/*---------------------------------------BOUCLES---------------------------------------- */

// Les Boucles sont des structures permettant d'executer plusieurs fois des instructions

// Ecrire un programme qui demande à l'utilisateur de saisir un nombre entier compris entre 1 et 10 .
// Le programme doit ensuite dessiner un sapin de noel composé d'etoiles(*)
// *
// **
// ***
// ****
// *****

const repetitions = prompt("saisir un nombre entier compris entre 1 et 10");

while (repetitions < 1 || repetitions > 10) {
  repetitions = prompt("saisir un nombre entier compris entre 1 et 10");
}

let stars = "";
for (let i = 0; i < repetitions; i++) {
  stars = stars + "*";
  console.log(stars)
}
