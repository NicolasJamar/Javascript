const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

/*
element.addEventListener(eventType, callback);

Dans la function callback(event), 'event' est un object qui a pls propriétés
Les 2 principales sont .type et .target 
type = le type d'évènement lancé par le callback
target = l'élément sur lequel est lancé le callback 
	-> ici event.target = l'input id 'name' ou 'message'
*/

const focusHandler = event => event.target.className = 'highlight';
const blurHandler = event => event.target.className = '';

nameInput.addEventListener('focus', focusHandler);
//'focus' active également la touche TAB
nameInput.addEventListener('blur', blurHandler); 
//'blur', c'est qd un élément perd son 'focus'

messageTextArea.addEventListener('focus', focusHandler);
messageTextArea.addEventListener('blur', blurHandler); 

