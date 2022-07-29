// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

// Variable to hold questions
var listOfQuestions = [
  {
    question: "Which of the following is not a JavaScript Data type?",
    a: "number",
    b: "string",
    c: "word",
    d: "boolean",
    correctAnswer: "word",
  },
  {
    question: "What is the use of isNaN function?",
    a: "divides negative number by zero",
    b: "returns true if the argument is not a number; otherwise, it is false.",
    c: "a programming language",
    d: "allows the user to enter input by providing a text box",
    correctAnswer: b,
  },
  {
    question: "Which symbol is used for comments in Javascript?",
    a: "//",
    b: "()",
    c: "||",
    d: "$$",
    correctAnswer: a,
  },
  {
    question: "Which is not a Pop up box availible in Javascript?",
    a: "alert",
    b: "confirm",
    c: "prompt",
    d: "warning",
    correctAnswer: d,
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Desktop Open Model",
    c: "Document Overview Model",
    d: "Desktop Overview Model",
    correctAnswer: a,
  },
  {
    question: "Which of the following is considered a boolean",
    a: "Myvariable = false",
    b: 'Myvariable = "dog"',
    c: "Myvariable = 234",
    d: 'Myvariable = "Good Morning"',
    correctAnswer: a,
  },
  {
    question:
      "________ variables are available throughout the length of the code so that it has no scope.",
    a: "this",
    b: "global",
    c: "local",
    d: "prompt",
    correctAnswer: b,
  },
  {
    question: "How do you replace a string content?",
    a: ".splice",
    b: ".pop",
    c: ".replace",
    d: ".length",
    correctAnswer: c,
  },
  {
    question: "Which is not a HTML event function?",
    a: "ontry",
    b: "onmouseover",
    c: "onkeydown",
    d: "onclick",
    correctAnswer: a,
  },
  {
    question: "Which of the following is a JavaScript Array Method",
    a: "potatoe method",
    b: "pop method",
    c: "candy method",
    d: "fruit method",
    correctAnswer: b,
  },
];

var startButton = document.getElementById("start-button");
var submitButton = document.getElementById("submit-button");
var quizContainer = document.getElementById("quiz-container");
var quizContents = document.querySelectorAll(".appear");
var startingContents = document.querySelectorAll(".hide");
var timerPlaceHolder = document.getElementById("timeLeft");
var questionPlaceHolder = document.getElementById("question");
var choiceAPlaceHolder = document.getElementById("a-text-holder");
var choiceBPlaceHolder = document.getElementById("b-text-holder");
var choiceCPlaceHolder = document.getElementById("c-text-holder");
var choiceDPlaceHolder = document.getElementById("d-text-holder");
var selectionA = document.getElementById("a");
var selectionB = document.getElementById("b");
var selectionC = document.getElementById("c");
var selectionD = document.getElementById("d");
var timer;
var timerCount;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  displayQuizContents();
  hideStartingContents();
  timerCount = 100;
  startTimer();
  loadQuestions();
}

function displayQuizContents() {
  for (var i = 0; i < quizContents.length; i++) {
    quizContents[i].style.display = "block";
  }
}

function hideStartingContents() {
  for (var i = 0; i < startingContents.length; i++) {
    startingContents[i].style.display = "none";
  }
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerPlaceHolder.textContent = timerCount + " seconds left";
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function loadQuestions(number) {
  var currentQuestion = listOfQuestions[number];
  questionPlaceHolder.textContent = currentQuestion.question;
  choiceAPlaceHolder.textContent = currentQuestion.a;
  choiceBPlaceHolder.textContent = currentQuestion.b;
  choiceCPlaceHolder.textContent = currentQuestion.c;
  choiceDPlaceHolder.textContent = currentQuestion.d;
}

submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  var currentQuestion = listOfQuestions[0];
  if (selectionA.checked) {
    if (currentQuestion.a === currentQuestion.correctAnswer) {
      // to do: move to next question function
    } else {
      timerCount -= 10;
    }
  } else if (selectionB.checked) {
    if (currentQuestion.b === currentQuestion.correctAnswer) {
      // to do: move to next question function
    } else {
      timerCount -= 10;
    }
  } else if (selectionC.checked) {
    if (currentQuestion.c === currentQuestion.correctAnswer) {
      // to do: move to next question function
    } else {
      timerCount -= 10;
    }
  } else {
    if (currentQuestion.d === currentQuestion.correctAnswer) {
      // to do: move to next question function
    } else {
      timerCount -= 10;
    }
  }
}

 function clearSelectedAnswer {
  
 }