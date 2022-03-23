var divTags = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");
var imgEl = document.querySelectorAll("img");
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start-button");

var currentIndex = 0;
// this is the list of questions and their corresponding answers
var questionsArray = [
    {
        text: "how many cylinders does an N54 engine run on?",
        options: [
             "Four",
             "Six", 
             "Eight", 
             "Ten"
            ],
        correct: "Six"
    },
    {
        text: "The N54 has which of the following qualities..",
        options: [
             "Naturally-Aspirated",
             "Turbocharged", 
             "Twin-Turbocharged", 
             "Supercharged"
            ],
        correct: "Twin-Turbocharged"
    },
    {
        text: "Which type of oil is used to lubricate the engine?",
        options: [
             "Conventional 30w",
             "Vegetable Oil", 
             "Synthetic 5w30", 
             "Fully Senthetic wd40"
            ],
        correct: "Synthetic 5w30"
    },
    {
        text: "What is the estimated horsepower rating for the N54?",
        options: [
             "200hp",
             "300hp", 
             "400hp", 
             "500hp"
            ],
        correct: "300hp"
    },
    {
        text: "Which of the following did NOT come with an N54 engine?",
        options: [
             "BMW M3",
             "BMW 335i", 
             "BMW Z4", 
             "BMW Alpina B3"
            ],
        correct: "BMW M3"
    }
]


// this indicates the amount of time for questions
var secondsLeft = 50;
// used to set the timer for countdown
function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
// when timer hits 0 executes next action
    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}

// this function initiates the quiz
function startQuiz(){
    setTime()
    replacePage()
    displayQuestion()
    }
// when start is click,the quiz begins
startEl.addEventListener("click", startQuiz)
// this function removes the title and paragrapgh from page, start quiz
function replacePage() {
    var questionContainer=document.getElementById("questionContainer");
    questionContainer.style.display = "block";
    var startContainer=document.getElementById("startContainer");
    startContainer.style.display = "none";
    var highscoreContainer=document.getElementById("highscoreContainer");
    highscoreContainer.style.display = "none";
}
// this function controls the display of questions
function displayQuestion () {
    var quizQuestion = document.getElementById("quizQuestion");
    quizQuestion.textContent = questionsArray[currentIndex].text;
// this controls the 1st choice answer
    var choice1 = document.getElementById("choice1");
    choice1.textContent = questionsArray[currentIndex].options[0];
    choice1.setAttribute("class", questionsArray[currentIndex].options[0])
    choice1.addEventListener("click", nextQuestion)
// this controls the 2nd choice answer
    var choice2 = document.getElementById("choice2");
    choice2.textContent = questionsArray[currentIndex].options[1];
    choice2.setAttribute("class", questionsArray[currentIndex].options[1])
    choice2.addEventListener("click", nextQuestion)
// this controls the 3rd choice answer
    var choice3 = document.getElementById("choice3");
    choice3.textContent = questionsArray[currentIndex].options[2];
    choice3.setAttribute("class", questionsArray[currentIndex].options[2])
    choice3.addEventListener("click", nextQuestion)
// this controls the 4th choice answer
    var choice4 = document.getElementById("choice4");
    choice4.textContent = questionsArray[currentIndex].options[3];
    choice4.setAttribute("class", questionsArray[currentIndex].options[3])
    choice4.addEventListener("click", nextQuestion)
    

}
// this is for logging users answer in comparison to correct answer
function nextQuestion (event) {
    console.log(event.target.textContent)
var userAnswer = event.target.textContent;
// console.log(userAnswer.getAttribute("class"));
if (userAnswer === questionsArray[currentIndex].correct) {

    currentIndex++;
    displayQuestion()
} else {
    secondsLeft = secondsLeft -15;
    currentIndex++;
    displayQuestion()
}
    
}
