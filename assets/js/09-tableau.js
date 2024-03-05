// ------------------------------------TABLEAUX--------------------------------

/* Un Tableau (array) est un type de donnée qui peut contenir plusieurs élements On peut créer un tableau en utilisant des crochets [] et en y insérants les éléments séparés par des virgules */


// Créer un tableau avec tous les mois de l'année 
// faire un console;log du tableau
// Afficher en console Janvier et Décembre
// Afficher tous les mois de l' année avec une boucle 
// Transformer cette boucle en fonction sans parametre

const tableau = ['janvier', 'fevrier', 'mars', 'avril', 'mai', 'juin', 'Juillet', 'aout', 'septembre', 'octobre', 'novembre', 'Décembre']
console.log(tableau)
console.log((tableau[0]),(tableau[11]))

for(let i = 0; i < tableau.length; i++){
    console.log(tableau[i])
}

function tableau2(){
    for(let i = 0; i < tableau.length; i++){
        console.log(tableau[i])
    }
}
tableau2()


