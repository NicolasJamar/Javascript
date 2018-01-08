//EXERCICE 1

document.body.classList.replace("bg-aqua", "bg-olive");
// sélectionne le body puis le type "classe" puis remplace bg-aqua par bg-olive;

var para = document.getElementsByTagName('p')[0];
// sélectionne le tag 'p' à l'index 0

para.classList.remove('bg-lime', 'gray'); //enlève la class
para.classList.add('aqua'); //ajoute une class

var bgTeal = document.getElementsByClassName('bg-silver')[0];
//attention, le getE..ClassName renvoye un tableau, donc, si on veut ajouter un élément à la classe, il faut dire que l'élément qu'on sélectionne est le 0.
bgTeal.classList.add("bg-teal");
//On ajoute un élément au tableau
console.log(bgTeal);

bgTeal.classList.remove('bg-silver');
//On retire l'élèment cité au tableau

var block = document.getElementsByTagName('blockquote')[0];
block.classList.add("bg-white");
console.log(block);

//EXERCICE 2

var table = document.querySelector('#my-table');
table.classList.add("bg-purple");

var queryAll = document.querySelectorAll('.container > p');
//Sélectionne tous les 'p' contenus dans la cass .container
console.log(queryAll);

for(i = 0; i<queryAll.length; i++){
	queryAll[i].classList.add("shadow");
}


//EXERCICE 3

