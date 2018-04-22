var students = [
	{ name: 'Nicolas', track: ['Javascript', 'Node js'], achievements: 3, points: 12 },
	{ name: 'Sarah', track: ['PHP', 'MySql'], achievements: 2, points: 8 },
	{ name: 'Simon', track: ['Google Vision', "Node js"], achievements: 3, points: 15 },
	{ name: 'Flora', track: ['Html', 'Sass'], achievements: 1, points: 9 },
	{ name: 'Elisa', track: ['Html', 'Sass'], achievements: 1, points: 6 },
	{ name: 'Nicolas', track: ['React', 'Node js'], achievements: 3, points: 12 }
]

var student;
var search;
var message = '';


function print(message){
	var outputMessage = document.getElementById('output');
	outputMessage.innerHTML = message;
}

function getStudentReport(student){
	var html = "<h2> Student name: " + student['name'] + "</h2>";
	html += "<p> tracks: " + student['track'] + "</p>";
	html += "<p> points: " + student.points + "</p>";
	html += "<p> achievements: " + student.achievements + "</p>";
	return html;
}

while(true){
	search = prompt("Entrez le nom d'un étudiant");

	if(search === null || search.toLowerCase() === 'quit'){
		break;
	}
	for(i=0; i<students.length; i++){
		student = students[i];

		if(search === student.name){
			message = getStudentReport(student);
			print(message);
		}
	}
}






