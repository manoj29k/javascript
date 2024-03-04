// ---------------------------------------operateurs-numériques----------------------------------------

// +,-,*,/,%,**
// declarer une constante operation affecte l'addition de 8989898988 et 78798
// Affiche en console le résultat du calcul est OPERATION

// soustraction , multiplication et division
let operation = 678678678 + 78798 // Addition
console.log(`le résultat du calcul est : ${operation}`)

operation = 678678678 - 78798 // Soustraction
console.log(`le résultat du calcul est : ${operation}`)

operation = 678678678 * 78798 // Multiplication
console.log(`le résultat du calcul est : ${operation}`)

operation = 678678678 / 78798 // Division
console.log(`le résultat du calcul est : ${operation}`)

operation = 60 % 3 // Reste de la division 
console.log(`le résultat du calcul est : ${operation}`)

// Démander à l'utilisateur un nombre 
// Démander à l'utilisateur un déuxieme nombre 

// si le nombre est divisible par le premier 
    // afficher ce nombre est un multiple du deuxieme 
// Sinon    
    // Ce n'est pas un multiple

const reponse = prompt ('Donne moi un nombre')
const reponse2 = prompt ('Donne moi un autre nombre')

if (reponse % reponse2 == 0) {
    console.log(`${reponse} est un multiple de ${reponse2}`)
} else {
    console.log('faux')
}