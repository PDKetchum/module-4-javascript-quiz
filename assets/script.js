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
var answerChecked = document.querySelectorAll(".answerChecked");
var answer = document.getElementById("answer");
var questionPlaceHolder = document.getElementById("question");
var choiceAPlaceHolder = document.getElementById("a-text-holder");
var choiceBPlaceHolder = document.getElementById("b-text-holder");
var choiceCPlaceHolder = document.getElementById("c-text-holder");
var choiceDPlaceHolder = document.getElementById("d-text-holder");
var selectionA = document.getElementById("a");
var selectionB = document.getElementById("b");
var selectionC = document.getElementById("c");
var selectionD = document.getElementById("d");
var highestScoreList = document.getElementById("highestScoreList");
var timer;
var timerCount;
var questionNumber;

// Event listener for start button
startButton.addEventListener("click", startQuiz);

// Display quiz contents, hide start button, start and set timer count to 100, start questions
function startQuiz() {
  timerCount = 100;
  questionNumber = 0;

  displayQuizContents(true);
  hideStartingContents();
  startTimer();
  loadQuestions(questionNumber);
}

// Display or hide quiz contents
function displayQuizContents(boolean) {
  var display = boolean ? "block" : "none";

  for (var i = 0; i < quizContents.length; i++) {
    quizContents[i].style.display = display;
  }
}
// Display or hides if previous answer was correct
function ifPreviousAnswerCorrect(boolean) {
  var display = boolean ? "block" : "none";

  for (var i = 0; i < answerChecked.length; i++) {
    answerChecked[i].style.display = display;
  }
}

// Hide starting contents
function hideStartingContents() {
  for (var i = 0; i < startingContents.length; i++) {
    startingContents[i].style.display = "none";
  }
}

// Starts timer
function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerPlaceHolder.textContent = timerCount + " seconds left";
    // If timer reaches 0 end quiz
    if (timerCount <= 0) {
      clearInterval(timer);
      displayUserInitialFormPage(true);
    }
  }, 1000);
}

// Adds questions from array to HTML page
function loadQuestions() {
  clearSelectedAnswer();

  var currentQuestion = listOfQuestions[questionNumber];
  questionPlaceHolder.textContent = currentQuestion.question;
  choiceAPlaceHolder.textContent = currentQuestion.a;
  choiceBPlaceHolder.textContent = currentQuestion.b;
  choiceCPlaceHolder.textContent = currentQuestion.c;
  choiceDPlaceHolder.textContent = currentQuestion.d;
}

// Event listener for submit button
submitButton.addEventListener("click", submitAnswer);

// Checks to see if user's selected answer is correct
function submitAnswer() {
  var isCorrect = true;
  var currentQuestion = listOfQuestions[questionNumber];
  if (
    // If selection 'A' is checked by user
    selectionA.checked &&
    // Contents do not match correct answer contents
    currentQuestion.a !== currentQuestion.correctAnswer
  ) {
    // Deduct 10 secs, show incorrect in next screen
    timerCount -= 10;
    isCorrect = false;
  } else if (
    selectionB.checked &&
    currentQuestion.b !== currentQuestion.correctAnswer
  ) {
    timerCount -= 10;
    isCorrect = false;
  } else if (
    selectionC.checked &&
    currentQuestion.c !== currentQuestion.correctAnswer
  ) {
    timerCount -= 10;
    isCorrect = false;
  } else if (
    selectionD.checked &&
    currentQuestion.d !== currentQuestion.correctAnswer
  ) {
    timerCount -= 10;
    isCorrect = false;
  } else if (
    // Alerts if no selections are checked
    !selectionA.checked &&
    !selectionB.checked &&
    !selectionC.checked &&
    !selectionD.checked
  ) {
    alert("Please select an answer.");
    return;
  }
  // Displays correct or incorrect on previous answered question
  answer.textContent = isCorrect ? "Correct" : "Incorrect";
  if (questionNumber === listOfQuestions.length - 1 || timerCount < 0) {
    clearInterval(timer);
    displayUserInitialFormPage(true);
  } else {
    // Move on to next question
    ifPreviousAnswerCorrect(true);
    loadQuestions(questionNumber++);
  }
}

// Clear user's previous selection
function clearSelectedAnswer() {
  selectionA.checked = false;
  selectionB.checked = false;
  selectionC.checked = false;
  selectionD.checked = false;
}

// Displays form for user to save their initials
function displayUserInitialFormPage(boolean) {
  var display = boolean ? "block" : "none";

  for (var i = 0; i < initialsPage.length; i++) {
    initialsPage[i].style.display = display;
  }
  // Hides contents
  displayQuizContents(false);
}

function loadScorePage() {
  // Hides contents
  scorePage.style.display = "block";
  ifPreviousAnswerCorrect(false);
  displayUserInitialFormPage(false);

  // Sort user score highest to lowest
  var scores = JSON.parse(localStorage.getItem("UserScores"));
  scores.sort((a, b) => {
    return b.userTime - a.userTime;
  });
  // Displays top 5 scores
  for (var i = 0; i < scores.length; i++) {
    if (i === 5) {
      return;
    } else {
      // Create an li element on HTML for user's initials and scores limit 5
      var listItem = document.createElement("li");
      listItem.textContent =
        "User: " + scores[i].userInitials + ", Time: " + scores[i].userTime;
      highestScoreList.appendChild(listItem);
    }
  }
}

// Event listener for save button
saveButton.addEventListener("click", saveUserScore);

function saveUserScore() {
  // To prevent negative scores
  if (timerCount < 0) {
    timerCount = 0;
  }
  // Alerts user to enter initials
  if (!userInitials.value) {
    alert("Please enter in your initials.");
    return;
  }
  var userScore = {
    userInitials: userInitials.value,
    userTime: timerCount,
  };

  // Grab user scores from local storage
  var userScores = localStorage.getItem("UserScores");

  if (userScores) {
    // Convert json string to object
    userScores = JSON.parse(userScores);
  } else {
    // If there is nothing saved in local storage, create a list
    userScores = [];
  }

  // Add user score to array of scores
  userScores.push(userScore);

  // Update local storage
  localStorage.setItem("UserScores", JSON.stringify(userScores));

  // Load score page
  loadScorePage();
}
