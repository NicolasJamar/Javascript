// Problem: We need a simple way to look at current weather in cities in the world
// Solution: Use Node.js to connect to openweathermap.org's API to get weather information
const http = require('http');

//Print error messages
function printError(error){
	console.error(error.message); //Pour afficher seulement le message d'erreur sans tout le bazar
}

function printMessageToConsole(city, country, weatherDescription, temperature){
	const message = `The weather in ${city}, ${country} is ${weatherDescription} with a temperature of ${temperature}°C`;
	console.log(message);
}

function get(city){
	try{
		//1. Connect to the API URL (https://teamtreehouse.com/nicolasjamar.json)
		const request = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fl&appid=b34339ecbc25db17492d0aa3bf33891b`
			, (response) => {
		
			if(response.statusCode === 200){
			//2. Read the data as a string
				let body = "";
				
				response.on('data', (data) =>{
					body += data.toString();
				});
				response.on('end', () =>{
					try{
				//3. Parse the data
						const weatherSearch = JSON.parse(body);  //converti une chaîne de caractère en objet.
				//4. Print out the data
						printMessageToConsole(city, weatherSearch.sys.country, weatherSearch.weather[0].description, weatherSearch.main.temp)
					} catch(error){
						printError(error);
					}
				});
			} else{
				//Pour afficher les erreurs qd on entre un mauvais nom d'user
				const message = `There is an error getting the city name for ${city} with error (${response.statusCode} = ${response.statusMessage})`;
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