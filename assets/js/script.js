//DOM Elements (*may need to be reworked*)
const startingPage = document.getElementById("starting-page");
const questionsPage = document.getElementById("question");
const questionAsked = document.getElementById("question-title");
const timeInterval = document.getElementById("time");
const endingPage = document.getElementById("ending-page");
const initialsInput = document.querySelector(".initials");
const submitButton = document.getElementById("submit");
const viewScore = document.querySelector(".score");
const listofHighScores = document.getElementById("list-of-scores");

// my loop of Questions, Options and Answers
let questions = [
  {
    Question: "Commonly used data types DO Not include:",
    Options: ["strings", "booleons", "alerts", "numbers"],
    Answer: "alerts",
  },
  {
    Question: "The condition in an if/else statement is enclosed with _____.",
    Options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    Answer: "parenthesis",
  },
  {
    Question: "Arrays in JavaScript can be used to store _____.",
    Options: [
      "numbers and strings",
      "other arrays",
      "booleons",
      "all of the above",
    ],
    Answer: "all of the above",
  },
  {
    Question:
      "String values must be enclosed within _____ when being assigned to variables.",
    Options: ["commas", "curly brackets", "quotes", "parenthesis"],
    Answer: "quotes",
  },
  {
    Question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    Options: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    Answer: "console.log",
  },
];
var Index = 0;

var timeRemaining = questions.length * 15;

// Hide my initial page
startingPage.addEventListener("click", startQuiz);

function startQuiz() {
  clockId = setInterval(countdown, 1000);
  questionsListed();
}

var clockId;

function questionsListed() {
  questionsPage.textContent = "";
  startingPage.classList.add("hide");
  questionsPage.classList.remove("hide");

  let firstQuestion = document.createElement("h2");
  firstQuestion.classList.add("question-title");
  firstQuestion.innerHTML = questions[Index].Question;
  questionsPage.appendChild(firstQuestion);

  let orderedListOfOptions = document.createElement("ol");
  // this will create a 4 <li> elements for each option
  for (let i = 0; i < 4; i++) {
    let listOfOptions = document.createElement("li");
    listOfOptions.classList.add("btn");
    listOfOptions.innerHTML = questions[Index].Options[i];

    firstQuestion.appendChild(orderedListOfOptions);
    orderedListOfOptions.appendChild(listOfOptions);
  }
  questionsPage.appendChild(orderedListOfOptions);

  //here I am creating conditions based on if the user chooses the right answer
  // if the user does choose correctly they get the message of correct
  // if the user doesn't choose correctly they get the message of incorrect
  var btn = document.querySelectorAll(".btn");
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
      var userChoice = this.textContent;
      var Message = document.createElement("p");
      if (userChoice === questions[Index].Answer) {
        Message.textContent = "Correct";
      } else {
        Message.textContent = "Incorrect";
        timeRemaining = timeRemaining - 15;
      }

      questionsPage.appendChild(Message);
      Index++;

      //if/else statement should time run out or the user finish's the quiz
      // the end page will appear with the initials submit button
      if (Index < questions.length) {
        setTimeout(questionsListed, 1000);
      } else {
        clearInterval(clockId);
        endingPage.classList.remove("hide");
        questionsPage.classList.add("hide");
      }
    });
  }
}

function countdown() {
  timeInterval.textContent = timeRemaining;
  timeRemaining--;
  if (timeRemaining < 0) {
    clearInterval(clockId);
  }
}

var scoreList = [];

// used to store my initials
var submitQuizHandler = function (event) {
  event.preventDefault();

  let initials = document.querySelector(".initials").value;

  if (!initials) {
    alert("Initials cannot be Blank!");
  }
  let scoreListObj = { initial: initials, score: timeRemaining };
  scoreList.push(scoreListObj);

  saveScores();
};
// used to store my score of TimeRemaining acting as the score
var saveScores = function () {
  console.log("saving scores");
  localStorage.setItem("scores", JSON.stringify(scoreList));
};

// this will load my score in the localStorage to be used and accessed later
var loadScores = function () {
  var loadedScores = localStorage.getItem("scores");
  if (!loadedScores) {
    return false;
  }
  scoreList = JSON.parse(loadedScores);
};
//event listener to store the initials
submitButton.addEventListener("click", submitQuizHandler);
loadScores();
