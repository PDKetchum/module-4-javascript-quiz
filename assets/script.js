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
    correctAnswer:
      "returns true if the argument is not a number; otherwise, it is false.",
  },
  {
    question: "Which symbol is used for comments in Javascript?",
    a: "//",
    b: "()",
    c: "||",
    d: "$$",
    correctAnswer: "//",
  },
  {
    question: "Which is not a Pop up box availible in Javascript?",
    a: "alert",
    b: "confirm",
    c: "prompt",
    d: "warning",
    correctAnswer: "warning",
  },
  {
    question: "What does DOM stand for?",
    a: "Document Object Model",
    b: "Desktop Open Model",
    c: "Document Overview Model",
    d: "Desktop Overview Model",
    correctAnswer: "Document Object Model",
  },
  {
    question: "Which of the following is considered a boolean",
    a: "Myvariable = false",
    b: 'Myvariable = "dog"',
    c: "Myvariable = 234",
    d: 'Myvariable = "Good Morning"',
    correctAnswer: "Myvariable = false",
  },
  {
    question:
      "________ variables are available throughout the length of the code so that it has no scope.",
    a: "this",
    b: "global",
    c: "local",
    d: "prompt",
    correctAnswer: "global",
  },
  {
    question: "How do you replace a string content?",
    a: ".splice",
    b: ".pop",
    c: ".replace",
    d: ".length",
    correctAnswer: ".replace",
  },
  {
    question: "Which is not a HTML event function?",
    a: "ontry",
    b: "onmouseover",
    c: "onkeydown",
    d: "onclick",
    correctAnswer: "ontry",
  },
  {
    question: "Which of the following is a JavaScript Array Method",
    a: "potatoe method",
    b: "pop method",
    c: "candy method",
    d: "fruit method",
    correctAnswer: "pop method",
  },
];

// Variables listed out
var startButton = document.getElementById("start-button");
var submitButton = document.getElementById("submit-button");
var saveButton = document.getElementById("save-button");
var quizContainer = document.getElementById("quiz-container");
var quizContents = document.querySelectorAll(".appear");
var startingContents = document.querySelectorAll(".hide");
var timerPlaceHolder = document.getElementById("timeLeft");
var initialsPage = document.querySelectorAll(".initialsPage");
var userInitials = document.getElementById("userInitials");
var scorePage = document.getElementById("scorePage");
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
var questionNumber = 0;

// Event listener for start button
startButton.addEventListener("click", startQuiz);

//
function startQuiz() {
  displayQuizContents(true);
  hideStartingContents();
  timerCount = 100;
  startTimer();
  loadQuestions(questionNumber);
}

function displayQuizContents(boolean) {
  var display = boolean ? "block" : "none";
  for (var i = 0; i < quizContents.length; i++) {
    quizContents[i].style.display = display;
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
    if (timerCount <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function loadQuestions() {
  var currentQuestion = listOfQuestions[questionNumber];
  questionPlaceHolder.textContent = currentQuestion.question;
  choiceAPlaceHolder.textContent = currentQuestion.a;
  choiceBPlaceHolder.textContent = currentQuestion.b;
  choiceCPlaceHolder.textContent = currentQuestion.c;
  choiceDPlaceHolder.textContent = currentQuestion.d;
  clearSelectedAnswer();
}

submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  var currentQuestion = listOfQuestions[questionNumber];
  if (
    selectionA.checked &&
    currentQuestion.a !== currentQuestion.correctAnswer
  ) {
    console.log(selectionA.checked);
    console.log(currentQuestion.correctAnswer);
    console.log(currentQuestion.a);
    timerCount -= 10;
  } else if (
    selectionB.checked &&
    currentQuestion.b !== currentQuestion.correctAnswer
  ) {
    console.log(selectionB.checked);
    console.log(currentQuestion.correctAnswer);
    console.log(currentQuestion.b);
    timerCount -= 10;
  } else if (
    selectionC.checked &&
    currentQuestion.c !== currentQuestion.correctAnswer
  ) {
    console.log(selectionC.checked);
    console.log(currentQuestion.correctAnswer);
    console.log(currentQuestion.c);
    timerCount -= 10;
  } else if (
    selectionD.checked &&
    currentQuestion.d !== currentQuestion.correctAnswer
  ) {
    console.log(selectionD.checked);
    console.log(currentQuestion.correctAnswer);
    console.log(currentQuestion.d);
    timerCount -= 10;
  } else if (
    !selectionA.checked &&
    !selectionB.checked &&
    !selectionC.checked &&
    !selectionD.checked
  ) {
    alert("Please select an answer.");
    return;
  }

  if (questionNumber === listOfQuestions.length - 1) {
    clearInterval(timer);
    loadInitialsPage();
  } else {
    loadQuestions(questionNumber++);
  }
}

function clearSelectedAnswer() {
  selectionA.checked = false;
  selectionB.checked = false;
  selectionC.checked = false;
  selectionD.checked = false;
}

function loadInitialsPage() {
  for (var i = 0; i < initialsPage.length; i++) {
    initialsPage[i].style.display = "block";
  }
  displayQuizContents(false);
}

function loadScorePage() {
  scorePage.style.display = "block";
  for (var i = 0; i < initialsPage.length; i++) {
    initialsPage[i].style.display = "none";
  }
  var scores = JSON.parse(localStorage.getItem("UserScore"));
  scores.sort((a, b) => {
    return b.userTime - a.userTime;
  });
  for (var i = 0; i < scores.length; i++) {
    if (i === 5) {
      return;
    } else {
    }
  }
}

saveButton.addEventListener("click", saveUserScore);

function saveUserScore() {
  var userScore = {
    userInitials: userInitials.value,
    userTime: timerCount,
  };

  localStorage.setItem("UserScore", JSON.stringify(userScore));
  loadScorePage();
}
