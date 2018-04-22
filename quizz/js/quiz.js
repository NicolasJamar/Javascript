//1. poser les questions unes à unes
//2. pour chaque réponse correctes, stocker 1 point
//3. Quand toutes questions posées, afficher les questions correctes et incorrectes

var questionsResponses = [
		{question: "Qui a écrit Mémoires d'Outretombe ?", answer: "chateaubriand"},
		{question: "Dans quelle ville est né Lautréamont ?", answer: "montevideo"},
		{question: "Quel est le nom du journal belge dans lequel est apparu la première fois les chants de Maldoror?", answer: "la jeune belgique"}
	];
var score = 0;
var question;
var answer;
var response;
var listCorrects = [];
var listWrongs = [];
var html;


function print(message) {
  var outputMessage = document.getElementById('output');
  outputMessage.innerHTML = message;
}

function buildList(arr){
	var listHTML = "<ol>";
	for(i=0; i<arr.length; i++){
		listHTML += "<li>" + arr[i] + "</li>";
	}
	listHTML += "</ol>";
	return listHTML;
}

for(var i=0; i< questionsResponses.length; i++){

		question = questionsResponses[i].question;
		answer = questionsResponses[i].answer;
		response = prompt(question).toLowerCase();

		if (response === answer){
			score++;
			listCorrects.push(question);
		} else {
			listWrongs.push(question);
		}
}
	
html = "Vous avez " + score + " points"
html += "<h2> Les questions où vous avez bien répondus sont : </h2>";
html += buildList(listCorrects);
html += "<h2> Les questions où vous avez mal répondus sont : </h2>";
html += buildList(listWrongs);
print(html);









