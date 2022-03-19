const arrayIds = [0, 1, 2, 3, 4];
const arrayQuestionsStrings = [
    "Commonly used data types do NOT include:",
    "The condition in an if/else statement is enclosed in:",
    "Arrays in JavaScript can be used to store:",
    "String values must be enclosed within ______ when being assigned to variables",
    "A very useful tool used during development and debugging for printing content to the debugger is:",
];
const arrayAnswers = [
    ["Strings", "Booleans", "Alerts", "Numbers"],
    ["Quotes", "Parenthesis", "Curly Brackets", "Square Brackets"],
    ["Numbers and Strings", "Other Arrays", "Booleans", "All of the above"],
    ["Commas", "Curly Brackets", "Quotes", "Parenthesis"],
    ["JavaScript", "Terminal Bash", "for loops", "console.log"]
];
const arrayAnswerNumbers = [2, 1, 3, 2, 3];

const questionObj = {
    questionId: arrayIds,
    questionString: arrayQuestionsStrings,
    answersArray: arrayAnswers,
    answerNumber: arrayAnswerNumbers
};

// Sets the timer function and its variables reused bellow
var count = 75;
var timer = document.querySelector("#counter")

var startTimer = function () {
    var countdown = setInterval(function () {
        count = count - 1;
        timer.innerHTML = count;
        // console.log(count);

        // stops the timer from going negative
        if (count === 0) {
            clearInterval(countdown);
            showEndGame();
        };
    }, 1000); // repeats the countdown function every 1000ms 
};

// Declaring display variables
var gameDisplay = document.getElementById("game-div");
var startScreenDisplay = document.getElementById("welcome-screen");
var highScoresDisplay = document.getElementById("high-scores");
var endGameDisplay = document.getElementById("end-game");
var timerDisplay = document.getElementById("timer");

// Display functions
function startGame() {
    gameDisplay.style.display = "block";
    startScreenDisplay.style.display = "none";
    highScoresDisplay.style.display = "none";
    endGameDisplay.style.display = "none";
    timerDisplay.style.display = "inline";

    // Sets the timer to 75
    count = 75;
    timer.innerHTML = count;
    startTimer();
};

function showEndGame() {
    highScoresDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    startScreenDisplay.style.display = "none";
    endGameDisplay.style.display = "block";
    timerDisplay.style.display = "none";
};

function showHighScores() {
    highScoresDisplay.style.display = "block";
    gameDisplay.style.display = "none";
    startScreenDisplay.style.display = "none";
    endGameDisplay.style.display = "none";
    timerDisplay.style.display = "none";
};

function showWelcomeScreen() {
    startScreenDisplay.style.display = "block";
    highScoresDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    endGameDisplay.style.display = "none";
    timerDisplay.style.display = "none";
};


// Display welcome screen when the page loads
showWelcomeScreen();