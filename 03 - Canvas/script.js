var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d");
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

//DRAPEAU Belgique
//bandeau noir
ctx.fillStyle = "black"; //! d'abord définir le style
ctx.fillRect(20,20,80,150); //! ensuite, appeler la function -> fillRect() appelle la function rectangle

//bandeau jaune
ctx.fillStyle = "#FFFF00";
ctx.fillRect(100,20,80,150);

//bandeau rouge
ctx.fillStyle = "red";
ctx.fillRect(180,20,80,150);

//DRAPEAU Algérie

ctx.fillStyle = "#32CD32";
ctx.fillRect(20,200,120,150);

ctx.beginPath();
ctx.moveTo(140,200);
ctx.lineTo(260,200);
ctx.lineTo(260,350);
ctx.lineTo(140,350);
ctx.lineWidth = 0.3;
ctx.strokeStyle = "black";
ctx.stroke();

ctx2.beginPath();
ctx2.arc(140,273,50,0,Math.PI*2,true);
ctx2.fillStyle = "red";
ctx2.fill();

ctx.beginPath();
ctx.arc(153,273,39,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();



//demi-cercle vert
ctx.beginPath();
ctx.arc(140,273,34,Math.PI*0.5,Math.PI*1.5,false);
ctx.fillStyle = "#32CD32";
ctx.fill();


//ctx2.globalCompositeOperation = 'source-atop';





// Etoile
// ctx.fillStyle = "gold";

// var x = 50;
// var y = 100;
// var size = 100;

// ctx.beginPath();
// ctx.moveTo(x, y);
// ctx.lineTo(x + size, y);
// ctx.lineTo(x + size * 0.15, y + size * 0.5);
// ctx.lineTo(x + size / 2, y - size * 0.4);
// ctx.lineTo(x + size * 0.85, y + size * 0.5);
// ctx.lineTo(x, y);
// ctx.fill();
