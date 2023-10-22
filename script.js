

        {
        prompt: "Commonly used data types DO Not Include:",

        answersEl ["1. strings","2. booleans","3. alerts","4.numbers"],

        correctAnswer ;'3. alerts'
    },

   {
       prompt  "The condition in an if/else statement is enclosed with___________.",

       answersEl ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],

       correctAnswer ;"3. parenthesis",
   },

   {
       prompt: "Arrays in JavaScript can be used to store___________.",

       answersEl ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],

       correctAnswer ;"4. allof the above",
  },

  {
      prompt: "String values must be enclosed within__________when being assigned to variables",

      answersEl ["1. commas", "2. curley brackets", "3. quotes", "4. parethesis"],

      correctAnswer ;"3. quotes",
  },

  {
      prompt: "A very useful tool used during development and debugging for printing content to th debugger is:",

      answersEl ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],

      correctAnswer ;"4. console.log",
  },


let questionsEl = document.querySelector("#questions");
let timerEl = document.querySelector("#timer");
let answersEl = document.querySelector("#answers");
let submitBtn = document.querySelector("#submit-score");
let startBtn = document.querySelector("#start");
let initialsEl = document.querySelector("#initials");
let feedbackEl = document.querySelector("#feedback");
let restartBtn = document.querySelector("#restart");

let currentQuestionIndex = 0;
let time = questionsEl.length * 15;
let timerId;
var timer=75;

function quizStart ( timerId = setInterval(clockTick, 1000);
);

timerEl.textContent = time;
let landingScreenEl = document.getElementById("start-screen");
landingScreenEl.setAttribute("class", "hide");
questionsEl.removeAttribute("class");
getQuestion();


function getQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let promptEl = document.getElementById("question-text");
    promptEl.textContent = currentQuestion.prompt;
    answersEl.innerHTML = "";
    currentQuestion.answers.array.forEach(
        function (answer, i) {
            let answerBtn = document.createElement("button");
            answerBtn.setAttribute("value", answer);
            answerBtn.textContent = i + 1 + "." + answer;
            answerBtn.onclick = questionClick;
            answersEl.appendChild(answerBtn);
    });
}


function questionClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
        time = 0;
    }
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
 } else {
    feedbackEl.textContent = "Correct!";
 }
 
 feedbackEl.setAttribute("class", "feedback");

 setTimeout(function(){
    feedbackEl.setAttribute("class", "feedback hide");
 }, 2000);
 currentQuestionIndex === questions.length
  {
    quizEnd();
 } else {
    getQuestion();
 }

  
function quizEnd() {
    clearInterval(timerId);
    let endScreenEl = document.getElementById("quiz-end");
    endScreenEl.removeAttribute("class");
    let finalScoreEl = document.getElementById("score-final");
    finalScoreEl.textContent = time;
    questionsEl.setAttribute("class","hide");
}

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}
    function saveHighscore () {
        let initials = initialsEl.value.trim();
        if (initials !== "") {
            let highscores = JSON.parse (
                window.localStorage.getItem("highscores")

            ) || [];
            let newScore = {
                score: time,
                initials: initials,
            };
            highscorse.push(newScore);
            window.localStorage.setItem(
                "highscores",
                JSON.stringify(highscores)
            );
            alert ("your score has been submitted");
        }
    }
     function checkForEnter(event) {
        if (event.key === "Enter") {
            saveHighscore();
            alert ("your score has been submitted");
        }
     }  
initialsEl.onkeyup = checkForEnter;

submitBtn.onclick = saveHighscore;

startBtn.onclick = quizStart;
    }