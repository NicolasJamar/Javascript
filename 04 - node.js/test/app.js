// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
const https = require('https');
const username = 'nicolasjamar';

function printMessageToConsole(username, badgeCount, points){
	const message = `${username} has ${badgeCount} total badges and ${points} points in Javascript`;
	console.log(message);
}

//1. Connect to te API URL (https://teamtreehouse.com/nicolasjamar.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, (response) => {
	//2. Read the date in as a string
	//3. Parse the data
	//4. Print out the data

	console.log(response.statusCode);
});

