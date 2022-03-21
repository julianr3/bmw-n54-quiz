var divTags = document.querySelectorAll("div");
var pTags = document.querySelectorAll("p");
var imgEl = document.querySelectorAll("img");
var timerEl = document.getElementById("timer");
var startEl = document.getElementById("start-button");

var currentIndex = 0;

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

    



// Sets first pTags to have a font-size of 40px
// pTags[0].setAttribute("style", "font-size: 40px;");

var secondsLeft = 50;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
    //   sendMessage();
    }

  }, 1000);
}


function startQuiz(){
    // var newElement= "<input type='time' name='count'>";
    // document.body.innerHTML=newElement;
    setTime()
    replacePage()
    displayQuestion()
    }

startEl.addEventListener("click", startQuiz)

function replacePage() {
    var questionContainer=document.getElementById("questionContainer");
    questionContainer.style.display = "block";
    var startContainer=document.getElementById("startContainer");
    startContainer.style.display = "none";
}

function displayQuestion () {
    var quizQuestion = document.getElementById("quizQuestion");
    quizQuestion.textContent = questionsArray[currentIndex].text;

    var choice1 = document.getElementById("choice1");
    choice1.textContent = questionsArray[currentIndex].options[0];
    choice1.addEventListener("click", nextQuestion)

    var choice2 = document.getElementById("choice2");
    choice2.textContent = questionsArray[currentIndex].options[1];
    choice2.addEventListener("click", nextQuestion)
    

    var choice3 = document.getElementById("choice3");
    choice3.textContent = questionsArray[currentIndex].options[2];
    choice3.addEventListener("click", nextQuestion)
    

    var choice4 = document.getElementById("choice4");
    choice4.textContent = questionsArray[currentIndex].options[3];
    choice4.addEventListener("click", nextQuestion)
    

}

function nextQuestion () {

    currentIndex++;
    displayQuestion()

}











//     var count = 1;
//     var timer = setInterval(function() {
//       console.log(count);
//       count--;
//       if(count === 0) {
//         stopInterval()
//       }
//     }, 1000);
    
//     var stopInterval = function() {
//       console.log('time is up!');
//       clearInterval(timer);
//     }    


// // function replacePage(){
// //   var counter = 100;
// //   setInterval(function() {
// //     counter--;
// //     if (counter >= 0) {
// //       span = document.getElementById("count");
// //       span.innerHTML = counter;
// //     }
// //     if (counter === 0) {
// //         alert('sorry, out of time');
// //         clearInterval(counter);
// //     }
// //   }, 1000);
// // }
// function start()
// {
//     document.getElementById("count").style="color:green;";
//     startTimer();
// };    

// var secondsLeft = 100;

// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft;
  
//       if(secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         sendMessage();
//       }
  
//     }, 1000);
// // // Sets changeP to have multiple style attributes
// // changeP.setAttribute("style", "font-size: 25px; font-weight: bold; text-decoration:underline; ");



// // var myQuestions = 
// // How many questions? 5
// // 5 questions
//     // each question has a text for question
//         // how many cylinders does an N54 engine run on?
    
//         // 4 possible answers
//         // Four
//         // Six
//         // Eight
//         // Ten
   
//         // 1 correct answer
//         // Six

//     // each question has a text for question
//         // The N54 has one of the following qualities..
    
//         // 4 possible answers
//         // Naturally-Aspirated
//         // Turbocharged
//         // Twin-Turbocharged
//         // Supercharged
    
//         // 1 correct answer
//         // Twin-Turbocharged

//     // each question has a text for question
//         // What is the estimated horsepower rating for the N54?
//     // 4 possible answers
//         // 200hp
//         // 300hp
//         // 400hp
//         // 500hp

//     // 1 correct answer
//         // 300hp

//     // each question has a text for question
//         // Which BMW model did NOT come with an N54 engine?
        
//     // 4 possible answers
//         // BMW M3
//         // BMW 135i
//         // BMW Z4
//         // BMW Alpina B3

//     // 1 correct answer
//         // BMW M3

//     // each question has a text for question
//         // Which option is an example of a MODERN tuning option for the N54 platform?
//     // 4 possible answers
//         // INPA
//         // Carly
//         // ShoeBox
//         // MHD
//     // 1 correct answer
//         // MHD
// }