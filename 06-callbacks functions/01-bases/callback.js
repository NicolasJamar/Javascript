// const sayHello = () => console.log('Hello');
// une callback function est 

const executeCallback = callback => callback(); // === function executeCallback(callback){  callback();  } 

//Print 'Hello'
executeCallback( () => console.log('Hello') ); /* en mode 'arrow function', il faut enlevé le point-virgule après 'Hello'
												 sinon il arrête l'exécution de la function */

//Print 'Goodbye'
executeCallback(function(){ 	//en mode normal
	console.log('Goodbye');
}); 