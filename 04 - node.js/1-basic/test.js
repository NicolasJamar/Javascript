// 1. Avant de travailler --> npm init dans la console

var http = require('http'); //appel à une bibliothèque de Node.js, ici la bibliothèque "http"
							//la var http est un objet qui permet de créer un serveur
// var url = require('url');

//On appelle la fonction createServer() contenue dans l'objet http et on enregistre ce serveur dans la variable server
var server = http.createServer(function(req, res){  

	var message = "coucou";

	res.writeHead(200, {"content-Type":"text/html"});
	res.write(`<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>

		<h2>${message}</h2>
		
	</body>
	</html>`);


	res.end();

});

server.listen(8080);
