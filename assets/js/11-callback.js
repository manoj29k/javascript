/*-----------------------------------CALLBACK---------------------------- */

// Un callback (fonction de rappel)est une fonction qui est passée en tant qu'argument dans une autre fonction

// function add
const add = function(x, y) {
  return x + y;
}
// function divide
const divide = function(x, y) {
  return x / y;
}
// function multiply
const multiply = function(x, y) {
  return x * y;
}

function display (callback){
    callback()
}

const hello = function(){
    console.log('hello world')
}

display(function(){
    console.log(23 + 67)
})

display(hello)
