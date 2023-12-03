const questions = [
  {
    question: "Which is large animal in the world?",
    answer: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Girafe", correct: false },
    ],
  },
  {
    question: "Which is largest country in the world?",
    answer: [
      { text: "India", correct: true },
      { text: "pakistan", correct: false },
      { text: "srilanka", correct: false },
      { text: "America", correct: false },
    ],
  },
  {
    question: "Which is large bird in the world?",
    answer: [
      { text: "peacock", correct: true },
      { text: "crow", correct: false },
      { text: "sparrow", correct: false },
      { text: "Girafe", correct: false },
    ],
  },
  {
    question: "Which is large animal in the world?",
    answer: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Girafe", correct: false },
    ],
  },
  {
    question: "Which is large animal in the world?",
    answer: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Girafe", correct: false },
    ],
  },
  {
    question: "Which is large animal in the world?",
    answer: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "elephant", correct: false },
      { text: "Girafe", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
