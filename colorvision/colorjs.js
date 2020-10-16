var currentQuestion = 0;
var score = 0;
var totQuestion = questions.length ;

var container = document.getElementById('quizContainer');
var image = document.getElementById('im');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var comment = document.getElementById('im2');

function loadQuestion (questionIndex){
	var q = questions[questionIndex];
	image.setAttribute("src", q.question);
	opt1.innerHTML = q.option1;
	opt2.innerHTML = q.option2;
	opt3.innerHTML = q.option3;
	opt4.innerHTML = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if (!selectedOption){
       alert('please select your answer!');
       return; 
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score++;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if (currentQuestion == totQuestion-1) {
		nextButton.innerHTML = 'Finish';
	}
	if (currentQuestion == totQuestion) {
		container.style.display = 'none';
		resultCont.style.display = '';
		comment.style.display = '';
		if(score>14)
		{
			resultCont.innerHTML = 'Congrats you have full color vision';
		}
		else if(score<=14 && score>5)
		{
			// resultCont.innerHTML = 'You got ' + round((score/totQuestion)*100) + '% correct answers';
			resultCont.innerHTML='You have mild red-green color deficiency'
		}
		else if(score<=5)
		{
			// resultCont.innerHTML = 'You got ' + round((score/totQuestion)*100) + '% correct answers';
			resultCont.innerHTML='You have strong red-green color deficiency'
		}
		
		return; 
	}
	loadQuestion (currentQuestion);
}
loadQuestion (currentQuestion);
