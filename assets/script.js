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
    questionString: arrayQuestionsStrings,
    answersArray: arrayAnswers,
    answerNumber: arrayAnswerNumbers
};

// Starts the page with an index of 0.
var index = 0;
// console.log(questionObj);

var createQuestionEl = function() {

    var questionH2El = document.createElement("h2"); // creates the <h2> html element
    questionH2El.className = "question-h2"; // assigns the class question-h2 to the <h2> element
    questionH2El.innerHTML = questionObj.questionString[index];

    console.log(questionObj.questionString[index]);
    
    var answerList = document.querySelector("#answers-list");
    for (i = 0; i < questionObj.answersArray.length; i++) {
        var answerItemEl = document.createElement("li"); // creates the <li> html element
        answerItemEl.className = "answer-item"; // assigns the class answer-item to the <li> element
        answerList.append(answerItemEl); 
    }
    
    // Adds one to the index list to generate the next question
    index++;
}



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