// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');

//Print error messages
function printError(error){
	console.error(error.message); //Pour afficher seulement le message d'erreur sans tout le bazar
}


function printMessageToConsole(username, badgeCount, points){
	const message = `${username} has ${badgeCount} total badges and ${points} points in Javascript`;
	console.log(message);
}

function getProfile(username){
	try{
		//1. Connect to the API URL (https://teamtreehouse.com/nicolasjamar.json)
		const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
		//2. Read the data as a string
			let body = "";
			response.on('data', (data) =>{
				body += data.toString();
			});
			response.on('end', () =>{
				try{
			//3. Parse the data
					const profile = JSON.parse(body);  //converti une chaîne de caractère en objet.
			//4. Print out the data
					printMessageToConsole(username, profile.badges.length, profile.points.JavaScript)
				} catch(error){
					printError(error);
				}
			});
		});

		request.on('error', error => { printError } ); //exception error
	} catch (error){
		printError(error); //emitted error. 
	}
};

const users = process.argv.slice(2);
users.forEach( username =>{  //--> peut s'écrire 'users.forEach(getProfile);' pcq on itère dans 1 paramètre et la function contient 1 paramètre
	getProfile(username);
});

//écrire : 'node app.js username' pour voir atteindre le JSON de l'utilisateur de son choix
