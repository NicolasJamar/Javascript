var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
  // ici, le reste du script


// ctx.beginPath();      // Début du chemin
// ctx.moveTo(50,50);    // Le tracé part du point 50,50
// ctx.lineTo(200,200);  // Un segment est ajouté vers 200,200
// ctx.moveTo(200,50);   // Puis on saute jusqu'à 200,50
// ctx.lineTo(50,200);   // Puis on trace jusqu'à 50,200
// ctx.closePath();      // Fermeture du chemin (facultative)

// ctx.lineWidth = 5;         // Définition de la largeur de ligne

// ctx.fill();
// ctx.stroke();

ctx.fillStyle = "black"; //! d'abord définir le style
ctx.fillRect(20,20,90,150); //! ensuite, appeler la function -> fillRect() appelle la function rectangle

ctx.fillStyle = "#FFFF00";
ctx.fillRect(110,20,90,150);

ctx.fillStyle = "red";
ctx.fillRect(200,20,90,150);





