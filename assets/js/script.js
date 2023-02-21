//variables 
var time = 60;
var timer

// variables created with document query selector 
let startScreen = document.getElementById("start-page");
var startButton = document.getElementById("start-button");
var quizScreen = document.getElementById("quiz-page");
var key = document.getElementById("key");
var answers = document.getElementById("answers");
var endScreen = document.getElementById("quiz-end-page")
var scoresScreen = document.getElementById("high-scores-page");
var timerCountDown = document.getElementById("timer");
var viewHighScores = document.getElementById('view-highscores');

var highScores


//quiz questions
var questions = [
    {
        question: "Commonly used data types DO NOT include",
        answersAll: ["strings", "booleans", "numbers", "alerts"],
        answerCorrect: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with what?",
        answersAll: ["parenthesis", "quotes", "curly brackets", "square brackets"],
        answerCorrect: "parenthesis"
    },
    {
        question: "Arrays in javascript can be used to store what",
        answersAll: ["other arrays", "booleans", "numbers and strings", "all of the above"],
        answerCorrect: "all of the above"
    },
    {
        question: "String Values must be enclosed within _______ when being assigned variables.",
        answersAll: ["curly brackets", "parenthesis", "quotes", "commas"],
        answerCorrect: "quotes"
    },
    {
        question: "What is a very useful tool for users during development and debugging for printing content for the debugger?",
        answersAll: ["terminal/bash", "JavaScript", "console.log()", "for loops"],
        answerCorrect: "console.log()"
    },
];

//function that hides the question page and scores page when the page is first loaded
function openPage() {
    quizScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");
    scoresScreen.setAttribute("class", "hide");
};

//this function pulls up all the scored that were saved to the 
function showHighScores() {
    var scores =JSON.parse(localStorage.getItem(highScores))
}

// click event to view the highscores 
viewHighScores.onclick = function() {
    quizScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");
    startScreen.setAttribute("class", "hide");
    scoresScreen.setAttribute("class", "show");

    showHighScores();
}

//runs start quiz function when the start button is clicked
startButton.onclick = function() {
    startQuiz()
}

//function that will run to stop the quiz either when time runs out or when all the questions have been answered 
function stopQuiz() {
    quizScreen.setAttribute("class", "hide");
    startScreen.setAttribute("class", "hide");
    scoresScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "show");

}

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    endScreen.setAttribute("class", "hide");
    scoresScreen.setAttribute("class", "hide");
    quizScreen.setAttribute("class", "show");

    //start timer 
    timer = setInterval(function(){
        if (time >= 1) {
            timerCountDown.textContent = time;
            time = time - 1;
        } else if (time === 0) {
            timerCountDown.textContent = "";
            stopQuiz();
        }

    }, 1000)
    // pull up questions 

}

//turn the varriable questions into interactive buttons that the user can click to answer
//when a button is clicked it moves on to the next question if question is wrong it will take 10 sec of the timer 
//when all question are answered then it will run the end quiz function

//count down when the quiz is started when it gets to zero it will run the end quiz function

// function to end quiz that will show the quiz end page that will have the user enter thir initials and it will save thir score and initials into local storage 

// have a function to order the bscores from highest to lowest 

// add event listener to view high scores 
//add functions for the buttons to either start the quiz again or clear the scores


openPage();