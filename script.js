let currentQuestion = 0;
let score = 0;
const questions = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
];

const questionHeading = document.querySelector(".question h2");
const resultHeading = document.querySelector(".result h2");
questionHeading.textContent = questions[currentQuestion].question;

const ans = document.querySelector(".answer");
const questionContainer = document.querySelector(".question");

const nextButton = document.querySelector(".next-button button");
nextButton.disabled = true;
nextButton.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion === questions.length) {
    resultHeading.textContent = `Your Score: ${score} / ${questions.length}`;
    nextButton.style.display = "none";
    questionContainer.style.display = "none";
    ans.style.display = "none";
  } else {
    questionHeading.textContent = questions[currentQuestion].question;
    ans.textContent = "";
    resultHeading.textContent = "";
    nextButton.disabled = true;
    showOptions();
  }
});
function showOptions() {
  questions[currentQuestion].options.forEach((opt) => {
    const button = document.createElement("button");
    button.textContent = opt;
    ans.appendChild(button);

    button.addEventListener("click", () => {
      if (opt === questions[currentQuestion].correctAnswer) {
        resultHeading.textContent = "Correct";
        resultHeading.style.color = "green";
        score++;
      } else {
        resultHeading.textContent = "Wrong";
        resultHeading.style.color = "red";
      }
      document.querySelectorAll(".answer button").forEach((button) => {
        button.disabled = true;
      });
      nextButton.disabled = false;
    });
  });
}
showOptions();
