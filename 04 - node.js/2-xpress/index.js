//express pour la gestion des routes -> GET, POST...
//npm install ejs -> pour créer des fichiers HTML qui lisent du js (comme PHP)

var express = require('express');
// on installe le module pour aller chercher le chemin
var path = require('path');
var app = express();
//session pour gérer les sessions
var session = require('express-session');
var bodyParser = require('body-parser');
//paramètres mongo
var mongoStore = require('connect-mongo');
var mgStore = mongoStore(session);
//connection à mongodb
var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test'

app.use(session(
	{
		secret:'gerard', 
		store: new mgStore({url: 'mongodb://localhost:27017/test' }) 
	} 
));

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extend:false} ));

// GET
app.get('/', function(req, res){

	console.log(req.session.tasks);

	// if(req.session.tasks != undefined){
	// 	// req.session.tasks.forEach((task) => {
	// 	res.render("index.ejs",{tasks:req.session.tasks});

	// }else{
	// 	res.render("index.ejs", { tasks:[] } );
	// }
	// res.sendFile(path.join(__dirname+'/views/index.html'));
	// res.end()

	//Chercher les données dans la db
	mongoClient.connect(url, function(err, client){
		var db= client.db('test');
		db.collection('tasks').find().toArray(function(err, data){
			res.render("index.ejs", {tasks:data});
		});
	});
	
});

// POST
app.post('/add', function(req, res){

	console.log(req.body.taskName);

	//pour stocker cookies
	// req.session.tasks.push();
	// if(req.session.tasks == undefined){
	// 	req.session.tasks=[]
	// }

	var tasks={name: req.body.taskName, done:false};

	// req.session.tasks.push({name:req.body.taskName, done:false});
	var expressRes = res;

	mongoClient.connect(url, function(err, client){
		var db = client.db('test')
		db.collection('tasks').insertOne(tasks, function(err, res){
			console.log(err, res);
			expressRes.redirect('/');
		})
	})
	// res.redirect('/');
})

app.listen(8080);