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
//Sélectionne tous les 'p' contenus dans la class .container
console.log(queryAll);

for(i = 0; i<queryAll.length; i++){
	queryAll[i].classList.add("shadow");
}


//EXERCICE 3

var pre = document.querySelector('pre');
pre.style.color = '#ffff00';
pre.style.backgroundColor = '#008000';
pre.style.borderTop = '3px solid red';
pre.style.borderBottom = '3px solid red';

document.getElementsByTagName('h3')[0].innerHTML = '<em>Itelic title ! yeah !</em>';
document.querySelector('h2').innerText = "<strong>HTML doens't work !</strong>";

//EXERCICE 4 : création d'élément

var premierUl = document.querySelector('ul'); //!!! querySelector sélectionne le premier élément spécifié
var meilleurAmi = document.createElement('li'); //création du 'li'
var link = document.createElement('a'); //création du 'a'
link.href = 'http://www.google.com'; //ajout de href dans 'a'
link.target = '_blank'; //ajout de target = _blank
link.innerHTML = 'Google'; // ajout du texte dans la balise 'a'

meilleurAmi.innerText = "Mon meilleur ami est ";

meilleurAmi.appendChild(link);
premierUl.appendChild(meilleurAmi);

document.querySelector('li > a').style.color = '#ff0066';
document.querySelector('li > a').style.textDecoration = 'none';

//EXERCICE 4 : Création et suppression de plusieurs éléments

document.querySelectorAll('ol')[0];
//NB : si je veux sélectionner un 'ol' à la position i mettre [i] -> ne fonctionne qu'avec SelectorAll
