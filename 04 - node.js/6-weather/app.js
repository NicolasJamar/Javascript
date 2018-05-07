
const wSearch = require('./weather');

const cities = process.argv.slice(2);   //.argv.slice(2);
cities.forEach(wSearch.get);

//écrire : 'node app.js city pour voir atteindre le JSON de la ville de son choix
