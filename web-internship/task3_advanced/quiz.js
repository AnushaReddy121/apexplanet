const quizQuestions = [
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Multi Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style System",
      "Creative Styling Sheet",
      "Computer Style Syntax"
    ],
    answer: "Cascading Style Sheets"
  }
];

const quizContainer = document.getElementById("quizContainer");

function loadQuiz() {
  quizContainer.innerHTML = "";
  quizQuestions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `
      <p><strong>Q${index + 1}. ${q.question}</strong></p>
      ${q.options
        .map(
          opt =>
            `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
        )
        .join("")}
    `;
    quizContainer.appendChild(div);
  });
}

function checkAnswers() {
  let score = 0;
  quizQuestions.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name="q${index}"]:checked`
    );
    if (selected && selected.value === q.answer) {
      score++;
    }
  });
  document.getElementById("score").innerHTML = `✅ You scored ${score}/${quizQuestions.length}`;
}

loadQuiz();
