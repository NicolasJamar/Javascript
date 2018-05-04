// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');
//
// const http = require('http');

//Print error messages
function printError(error){
	console.error(error.message); //Pour afficher seulement le message d'erreur sans tout le bazar
}


function printMessageToConsole(username, badgeCount, points){
	const message = `${username} has ${badgeCount} total badges and ${points} points in Javascript`;
	console.log(message);
}

function get(username){
	try{
		//1. Connect to the API URL (https://teamtreehouse.com/nicolasjamar.json)
		const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
		
			if(response.statusCode === 200){
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
			} else{
				//Pour afficher les erreurs qd on entre un mauvais nom d'user
				const message = `There is an error getting the profile for ${username} with error (${response.statusCode} = ${response.statusMessage})`;
				const statusCodeError = new Error (message);
				printError(statusCodeError);
			}
		});

		request.on('error', error => { printError } ); //exception error
	} catch (error){
		printError(error); //emitted error. 
	}
};

module.exports.get = get;  //pour pouvoir exporter la méthode get