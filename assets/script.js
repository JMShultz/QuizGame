// Get querySelectors

let questionsOptionsEl = document.querySelector( "#questionsoptions"); 
		
let timeCountEl = document.querySelector("#timer"); 

let OptionsEl = document.querySelector("#options"); 
	

let startbtn = document.querySelector("#start");
	 

let ResponceEl = document.querySelector( "#Responce");


let questions = [ 
	
	{
    prompt: 'commonly used data types do not include:',
    options: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: "alerts",
  },
  {
    prompt:'Arrays in JavaScript can be used to store?',
    options: ['Numbers', 'Strings', 'Other arrays', 'All of the above'],
    answer: "All of the above",
    
  },
  {
    prompt:'A condition in an if / else statement is enclosed with_____.',
    options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    answer: "curly brackets",
  },
]; 


// Variables 
let currentQuestionIndex = 0; 
let time = questions.length * 15; 
let TimerId=0; 

// To start quiz

function StartQuiz() { 
	TimerId = setInterval( Timer, 1000 );
		
		

	timeCountEl.textContent = time; 
	let MainScreenEl = document.getElementById( "main-screen");
		
			
		
	MainScreenEl.setAttribute( "class",	"hide");
		 
	

	questionsOptionsEl.removeAttribute( "class");
		
	
	QuestionReceive(); 
} 

// will loop to next question in the index
function QuestionReceive() { 
	let currentQuestion = questions[currentQuestionIndex]; 
		
	let QuestionPromtEl = document.getElementById("questions-choices");
		 
			
		
	QuestionPromtEl.textContent = 	currentQuestion.prompt; 
	
	OptionsEl.innerHTML = ""; 
	currentQuestion.options.forEach( 
		function (Options, Index) { 
			let OptionsBtn = document.createElement( "button");
				
					
				
			OptionsBtn.setAttribute( "value", Options );
				
				
			
			OptionsBtn.textContent = Index + 1 + ". " + Options;
				 
			OptionsBtn.onclick = questionAnswer; 
				
			OptionsEl.appendChild(OptionsBtn ); 
				
			
		} 
	); 
} 

// Check to see if answer is right or wrong

function questionAnswer() { 
	if ( 

		this.value !== questions[currentQuestionIndex] .answer 
		
			
	) { 
		time -= 10; 
		if (time < 0) { 
			time = 0; 
		} 
		timeCountEl.textContent = time; 
		ResponceEl.textContent = 'Wrong'; 
		ResponceEl.style.color = "grey"; 
	} else { 
		ResponceEl.textContent = "Correct"; 
			
		ResponceEl.style.color = "grey"; 
			
	} 

	ResponceEl.setAttribute( "class", "Responce");
		
		

	setTimeout(function () {


		ResponceEl.setAttribute( "class","Responce hide");
			 
			
		
	}, 2000); 
	currentQuestionIndex++; 
	if ( 
		currentQuestionIndex === 	questions.length 
	
	) { 
		EndQuizGame(); 
	} else { 
		QuestionReceive(); 
	} 
} 

// To end the quiz 

function EndQuizGame() { 
	clearInterval(TimerId); 
	let EndGameEl = document.getElementById( "quiz-ending");
		
			
		
	EndGameEl.removeAttribute( 	"class");
	
	
	let ScoreEl = document.getElementById( "final-score");
		
			
		ScoreEl.textContent = time; 
	questionsOptionsEl.setAttribute( "class", 	"hide");
		
	
	
} 

// if timer reaches zero quiz will end

function Timer() { 
	time--; 
	timeCountEl.textContent = time; 
	if (time <= 0) { 
		EndQuizGame(); 
	} 
} 


// Start quiz after clicking start quiz 

startbtn.onclick = StartQuiz;
