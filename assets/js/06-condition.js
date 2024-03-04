// -----------------------------------Instructions Conditionnelles-------------------------------------

// Les opérateurs de comparison  (==, ===, !=, !==, >, >=, <, <=)

// déclarer une constante condition vous lui donez en valeur unn nombre

// Vérifier si ce nombre est supérieur ou égal à 18 si c'est le cas affichez vous etes majeur

// Si la condition est vraie (truthy), le block d'instruction est éxécuté
// Sinon il est ignoré

const condition = 18;

if (condition >= 18) {
  console.log("vous etes majeur");
}

// Les opérateurs logiques
// Déclarer une variable qui contient un nombre (démandez à l'utilisateur)
// Si le nombre est divisible par 3 afficher dans un alert 'fizz'
// Si le nombre est divisible par 5 afficher dans un alert 'Buzz'
// Si le nombre est divisible par 3 et 5 afficher dans un alert 'fizzBuzz'
// Sinon afficher dans un alert le nombre

const num = prompt("saisir un nombre");

if (num % 3 == 0) {
  alert("Fizz");
}
if (num % 5 == 0) {
  alert("Buzz");
}
if (num % 3 == 0 && num % 5 == 0) {
  alert("FizzBuzz");
} else {
  alert(num);
}

// demandez un nombre 12
// if ce nombre est egal 12
// Bravo

reponse = prompt("donne moi une nombre");
console.log(typeof reponse);
// === vérifie à la fois la valeur et le type des valeurs comparées (opérandes)
if (reponse === "12") {
  console.log("bravo");
} else {
  console.log("faux");
}

// Démandez à l'utilisateur son animal préféré
// si c'esst un chien
// vous etes quelqu'un de bien
// si c'est un chat
// Quelle drole d'idée
// si c'est un poission rouge
// Je ne veux plus parler avec toi
// sinon
// J'ai pas compris la réponse

const animal = prompt("Quelle est votre animal préféré");
if (animal == "chien") {
  console.log("vous etes quelqu'un de bien");
} else if (animal == "chat") {
  console.log("Quelle drole d'idée");
} else if (animal == "poission rouge") {
  console.log("Je ne veux plus parler avec toi");
} else {
  console.log("J'ai pas compris la réponse");
}

switch (animal) {
    case 'chien':
        console.log("vous etes quelqu'un de bien");
        break;
    case 'chat' :
        console.log("Quelle drole d'idée");
        break;
    case 'poission rouge' :
        console.log("Je ne veux plus parler avec toi");
        break
    default :
        console.log("J'ai pas compris la réponse");
}

