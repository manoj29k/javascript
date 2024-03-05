/* ------------------FONCTIONS SUR LESTABLEAUX------------------- */

// Crée un tableau d' animaux ('chat' , 'chien' , 'tigre' , 'lion' , 'requin' , 'singe')
const animaux = ['chat', 'chien', 'tigre', 'lion', 'requin', 'singe']

// ajoute un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
const resultat = animaux.push('girafe', 'sanglier')
console.log(resultat)

//  Supprime le dernier élément d'un tableau
animaux.pop()
console.log(animaux)


// Ajouter un ou plusieurs éléments au début du tableau
animaux.unshift('requin', 'panda')
console.log(animaux)

// supprime le premier élément d'un tableau
animaux.shift()
console.log(animaux)


// Réorganiser un tableau de la fin vers le debut
animaux.reverse()
console.log(animaux)

// Modifier ou ajouter o supprimer un élément d'un tableau
// Ajouter un 'raton laveur' au deuxième élément du tableau
animaux.splice(1, 0, 'raton laveur')
console.log(animaux)

// Modifier 'chien' en 'aigle'
animaux.splice(6, 1, 'aigle')
console.log(animaux)
// supprimer 'panda'
animaux.splice(8, 1, 'requin')
console.log(animaux)

// Déclarer un tableau contenant ('paris', 'Berlin', 'Rome' , 'Londres','moscow' , ' madrid')
/*
    créer une fonction qui prend en parametre un tableau 
         Retrire Madrid
         Ajoute au debut Vienne
         Rome devient Alger
         Retourne la taille du tableau
*/

const city = ['paris', 'Berlin', 'Rome' , 'Londres','moscow' , ' madrid']
city.splice(5, 1,)
console.log(city)

city.unshift('Vienne')
console.log(city)

city.splice(3, 1, 'Alger')
console.log(city)

console.log(city.length)























