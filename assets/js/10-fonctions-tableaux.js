/* ------------------FONCTIONS SUR LESTABLEAUX------------------- */

// Crée un tableau d' animaux ('chat' , 'chien' , 'tigre' , 'lion' , 'requin' , 'singe')
const animals = ['chat', 'chien', 'tigre', 'lion', 'requin', 'singe']

// ajoute un ou plusieurs éléments à la fin d'un tableau
// Renvoie la nouvelle longueur du tableau
const resultat = animals.push('girafe', 'sanglier')
console.log(resultat)

//  Supprime le dernier élément d'un tableau
animals.pop()
console.log(animals)


// Ajouter un ou plusieurs éléments au début du tableau
animals.unshift('requin', 'panda')
console.log(animals)

// supprime le premier élément d'un tableau
animals.shift()
console.log(animals)


// Réorganiser un tableau de la fin vers le debut
animals.reverse()
console.log(animals)

// Modifier ou ajouter o supprimer un élément d'un tableau
// Ajouter un 'raton laveur' au deuxième élément du tableau
animals.splice(1, 0, 'raton laveur')
console.log(animals)

// Modifier 'chien' en 'aigle'
animals.splice(6, 1, 'aigle')
console.log(animals)
// supprimer 'panda'
animals.splice(8, 1, 'requin')
console.log(animals)

// Déclarer un tableau contenant ('paris', 'Berlin', 'Rome' , 'Londres','moscow' , ' madrid')
/*
    créer une fonction qui prend en parametre un tableau 
         Retrire Madrid
         Ajoute au debut Vienne
         Rome devient Alger
         Retourne la taille du tableau
*/

const city = ['paris', 'Berlin', 'Rome' ,'moscow', 'Londres', ' madrid'  ]
const modifyArray = (array) =>{
    array.pop()
    array.unshift('Vienne')
    array.splice(3, 1, 'Alger') 
    return array.length 
}
const cityLength = modifyArray(city)

// for (.. of ..){ permet de parcourir les elements d'un objets itéral (ex : tableau , string )
// Sur le tableau animals faire une boucle for () pour afficher tous les élements du tableau
// Sur le tableau animals faire une boucle for (.. of ..) pour afficher tous les élements du tableau

for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i]);
  }

for (let animal of animals) {
    console.log(animal);
}

// foreach(){est une méthode Js qui permet d'itérer sur les éléments d'un tableau}
 animals.forEach(function(animal){
        console.log(animal)
    })





















