// -----------------La Manipulation du DOM en Javascript----------------

// Le DOM (Document Object Model) en Javascript 
// est un erépresentaation en mémoire d'un document HTML chargé par le navigateur.
// Le DOM represente chaque élément du docoment comme objet Javascript qui peut etre manipulé  et modifié à travers le code javascript


// ? La méthode `getElementById()`
const mainTitle = document.getElementById('title')
console.log(mainTitle);
mainTitle.style.color = 'red'

/* 
    ? La méthode `getElementsByTagName()`
    getElementsByTagName() permet de recuperer une collection d'elements
    on pourra itérer avec la boucle for
*/

const paragraphes  = document.getElementsByTagName('p')
// Faire une boucle sur l'HTML collection paragraphes 
console.log(paragraphes);

for (let i = 0 ; i < paragraphes.length; i++) {
    paragraphes[i].style.color = 'purple'
}

/* ? `La méthode getElementsByClassName()` */

const title = document.getElementsByClassName("title2")
for (let i = 0 ; i < title.length; i++) {
    title[i].style.backgroundColor = 'purple'
}
console.log(title);


/* 
    ? La méthode `querySelector()`
*/
const paragraph = document.querySelector('#title2')
for (let i = 0 ; i < paragraph.length; i++) {
    paragraph[i].style.font.Size = '50px'
}


// Récuper tous les paragraphes avec la méthode querySelectorAll()
 const newParagraphes = document.querySelectorAll('p')
 console.log(newParagraphes);
 for(let paragraph of newParagraphes){
    paragraph.style.textDecoration = 'underline'
 }

