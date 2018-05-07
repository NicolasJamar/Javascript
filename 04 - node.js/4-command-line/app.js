// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');
// const username = 'nicolasjamar';

function printMessageToConsole(username, badgeCount, points){
	const message = `${username} has ${badgeCount} total badges and ${points} points in Javascript`;
	console.log(message);
}

function getProfile(username){
	//1. Connect to the API URL (https://teamtreehouse.com/nicolasjamar.json)
	const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
	//2. Read the data as a string
		let body = "";
		response.on('data', (data) =>{
			body += data.toString();
		});
		//à la fin de la lecture des data, faire ceci :
		response.on('end', () =>{
	//3. Parse the data
			const profile = JSON.parse(body);  //converti une chaîne de caractère en objet.
			// console.log(typeof profile);
	//4. Print out the data
			printMessageToConsole(username, profile.badges.length, profile.points.JavaScript)
		});
	});
};

// const users = ["chalkers", "nicolasjamar", "davemcfarland"];

const users = process.argv.slice(2);//'process' est le global object de Node js, idem que 'window' pour le browser
									// 'argv' est une propriété de process qui liste tous les arguments de process.
									// Les 2 premiers arguments renvoyés sont les chemins des fichiers donc on slice à partir du 3e élément du tableau renvoyé

users.forEach( username =>{  //--> peut s'écrire 'users.forEach(getProfile);' pcq on itère dans 1 paramètre et la function contient 1 paramètre
	getProfile(username);
});

//écrire : 'node app.js username' pour voir atteindre le JSON de l'utilisateur de son choix
