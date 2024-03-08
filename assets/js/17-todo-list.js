// Cibler le ul
// cibler le bouton
//  Verifie ce que je recupere
const submit = document.querySelector("#btn");
// Ajouter un écouteur  d' evenement sur buton => click
const input = document.querySelector("#input");
const todoList = document.querySelector("#todo-list");
submit.addEventListener("click", function () {
  if (input.value != "") {
    const listItem = document.createElement("li");
    listItem.textContent = input.value;
    todoList.prepend(listItem);
  }
});

todoList.addEventListener('click', function (e) {
  e.target.style.textDecoration = "line-trough";
});
todoList.addEventListener('dblclick', function (e) {
  e.target.remove();
});
// verifie si au clique on affiche un message en console
// créer un li
// cibler un input
// le texte du li sera le texte ded l'input (pas textContent)
// Ajouteer dans le ul

// Ajouter un ecouteur sur l'ul => click
// La cible changera et sera barre (css)

// Ajouter un ecouteur sur l'ul =>double click
// supprime l'élément
