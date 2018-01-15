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

//DRAPEAU BELGIQUE
//bandeau noir
ctx.fillStyle = "black"; //! d'abord définir le style
ctx.fillRect(20,20,80,150); //! ensuite, appeler la function -> fillRect() appelle la function rectangle

//bandeau jaune
ctx.fillStyle = "#FFFF00";
ctx.fillRect(100,20,80,150);

//bandeau rouge
ctx.fillStyle = "red";
ctx.fillRect(180,20,80,150);

//DRAPEAU ALGERIE
// Rectangle vert à gauche
ctx.fillStyle = "#00b300";
ctx.fillRect(20,200,120,150);

// cadre rectange blanc à droite
ctx.beginPath();
ctx.moveTo(140,200);
ctx.lineTo(260,200);
ctx.lineTo(260,350);
ctx.lineTo(140,350);
ctx.lineWidth = 0.3;
ctx.strokeStyle = "black";
ctx.stroke();

// rond rouge
ctx2.beginPath();
ctx2.arc(140,273,50,0,Math.PI*2,true);
ctx2.fillStyle = "red";
ctx2.fill();

ctx.beginPath();
ctx.arc(153,273,39,0,Math.PI*2,true);
ctx.fillStyle = "white";
ctx.fill();

// partie verte dans le croissant 
ctx.beginPath();
ctx.moveTo(140,236);
ctx.arcTo(40,273,140,310,39);  // (jouer avec, à mis distance de y de moveTo et lineTo)
ctx.lineTo(140,310); // la position finale de l'arc (!!! idem que dans arcTo)
ctx.lineTo(140,236);
ctx.closePath();
ctx.fillStyle = "#00b300";
ctx.fill();

// Etoile

ctx.translate(140,260);
ctx.rotate(15*Math.PI/180);
ctx.translate(-140,-260);
ctx.beginPath();
ctx.moveTo(140, 260);
ctx.lineTo(188, 260);
ctx.lineTo(164, 280);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

ctx.translate(164,268);
ctx.rotate(72*Math.PI/180);
ctx.translate(-164,-268);
ctx.beginPath();
ctx.moveTo(140, 260);
ctx.lineTo(188, 260);
ctx.lineTo(164, 280);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();

ctx.translate(164,268);
ctx.rotate(72*Math.PI/180);
ctx.translate(-164,-268);
ctx.beginPath();
ctx.moveTo(140, 260);
ctx.lineTo(188, 260);
ctx.lineTo(164, 280);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();


