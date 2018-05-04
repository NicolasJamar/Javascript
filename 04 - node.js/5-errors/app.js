
const profile = require('./profile');

const users = process.argv.slice(2);
users.forEach( username =>{  //--> peut s'écrire 'users.forEach(profile.get);' pcq on itère dans 1 paramètre et la function contient 1 paramètre
	profile.get(username);
});

//écrire : 'node app.js username' pour voir atteindre le JSON de l'utilisateur de son choix
