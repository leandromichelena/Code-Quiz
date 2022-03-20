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

var highScores = [];

var answerList = document.querySelector("#answers-list");
var questionDiv = document.querySelector(".question-div");
var rightOrWrong = document.querySelector(".right-or-wrong");
var scoreEl = document.querySelector("#score");
var scoreSubmit = document.querySelector("#score-submit");

// Starts the page with an index of 0.
var index = 0;
// console.log(questionObj);

var createQuestionEl = function() {

    var questionH2El = document.createElement("h2"); // creates the <h2> html element
    questionH2El.className = "question-h2"; // assigns the class question-h2 to the <h2> element
    questionH2El.innerHTML = questionObj.questionString[index]; // reads the array inside the object and writes on the h2 element
    questionDiv.append(questionH2El); // appends the created element on the existing div

    
    for (i = 0; i < 4; i++) {
        var answerItemEl = document.createElement("li"); // creates the <li> html element
        answerItemEl.className = "answer-item"; // assigns the class answer-item to the <li> element
        answerItemEl.innerHTML = questionObj.answersArray[index][i];
        answerItemEl.setAttribute("answer-id", i);

        answerList.append(answerItemEl);
    }
    
    // Adds one to the index list to generate the next question
    console.log("The answer is #" + (questionObj.answerNumber[index]+1));
    index++;
    // return questionObj.answerNumber[index-1];
}

var answerClick = function(event) {
    console.log("Answer was clicked!");
    // Reads the answer-id attribute from the clicked answer
    var answerClicked = event.target.getAttribute("answer-id");

    // Clears the previous question and answers
    questionDiv.innerHTML = "";
    answerList.innerHTML = "";

    // Ends the game after the last round of questions
    if (index == questionObj.questionString.length) {
        showEndGame();
    }

    // User clicked the correct answer
    else if (answerClicked == questionObj.answerNumber[index - 1]) { 
        console.log("Correct!")
        createQuestionEl();
    }

    // User clicked the wrong answer
    else {
        console.log("Wrong!")
        count = count -10;
        createQuestionEl();
    };
};

// Sets the timer function and its variables reused bellow
var count = 75;
var timer = document.querySelector("#counter")

var countdown = function() {
    count = count - 1;
    timer.innerHTML = count;
    // console.log(count);

    // stops the timer from going negative
    if (count <= 0) {
        clearInterval(timerInterval);
        showEndGame();
    };
};

var timerInterval // variable to store the interval      
var startTimer = function () {
    timerInterval = setInterval(countdown, 1000); // repeats countdown every 1000ms 
};

// Displays the score at the end of the game 
var printScore = function (currentScore) {
    scoreEl.textContent = currentScore;
};

var addScore = function () {
    var initialsInput = document.querySelector("input[name='initials']").value;

    var newScore = {
        "score": count,
        "initials": initialsInput
    }
    highScores.push(newScore);
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

    // Clears the question and answers from previous game
    questionDiv.innerHTML = "";
    answerList.innerHTML = "";
    // Sets question index to 0 and resets the timer to 75
    index = 0;
    count = 75;
    timer.innerHTML = count;
    startTimer();
    createQuestionEl();
};

function showEndGame() {
    highScoresDisplay.style.display = "none";
    gameDisplay.style.display = "none";
    startScreenDisplay.style.display = "none";
    endGameDisplay.style.display = "block";
    timerDisplay.style.display = "none";

    // Stops the countdown for the score
    clearInterval(timerInterval);
    var currentScore = count;
    console.log("currentScore is " + currentScore);
    printScore(currentScore);
    // return currentScore;
};

function showHighScores (event) {
    event.preventDefault(); // prevents the browser from refreshing after submitting the form

    addScore();

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

answerList.addEventListener("click", answerClick);
scoreSubmit.addEventListener("submit", showHighScores);

// Display welcome screen when the page loads
showWelcomeScreen();