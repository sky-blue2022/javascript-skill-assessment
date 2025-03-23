const quizListContainer = document.getElementById("quiz-list");
const scoreDisplay = document.getElementById("overall-score");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all saved answers and scores?")) {
    localStorage.removeItem("quiz-progress");
    window.location.reload();
  }
});

// Combine all chapters' data into a single array
const allQuizData = [
  { chapter: 1, title: "JavaScript Introduction", data: quizDataCh1 },
  { chapter: 2, title: "JavaScript Basic Syntax", data: quizDataCh2 },
  { chapter: 3, title: "Operators in JavaScript", data: quizDataCh3 },
  { chapter: 4, title: "Control Statements", data: quizDataCh4 },
  { chapter: 5, title: "Functions in JavaScript", data: quizDataCh5 },
  { chapter: 6, title: "Objects, Methods, and Classes", data: quizDataCh6 },
  {
    chapter: 7,
    title: "Manipulating Web Pages With Javascript",
    data: quizDataCh7,
  },
  { chapter: 8, title: "Web API And Ajax", data: quizDataCh8 },
  { chapter: 9, title: "Modules And Libraries", data: quizDataCh9 },
  { chapter: 10, title: "Browser Storage", data: quizDataCh10 },
  { chapter: 11, title: "Building Web Applications", data: quizDataCh11 },
];

let flatQuizData = [];
allQuizData.forEach((section) => {
  flatQuizData = flatQuizData.concat(section.data);
});

const progress = getStoredProgress();
const scoreData = getQuizScore(flatQuizData); // modified to accept full list
scoreDisplay.textContent = `Score: ${scoreData.percentage}% (${scoreData.correct} correct out of ${scoreData.total})`;

let globalIndex = 0;

allQuizData.forEach((section) => {
  const chapterTitle = document.createElement("h2");
  chapterTitle.textContent = `${section.title}`;
  quizListContainer.appendChild(chapterTitle);

  section.data.forEach((q, localIndex) => {
    const status = progress[globalIndex]
      ? progress[globalIndex].correct
        ? "✅ Correct"
        : "❌ Incorrect"
      : "🟡 Not Answered";

    const questionEl = document.createElement("div");
    questionEl.classList.add("quiz-item");

    questionEl.innerHTML = `
      <span class="status">${status}</span>
      <span class="quiz-title">Q${globalIndex + 1}. ${q.question}</span>
      <a href="quiz.html?question=${globalIndex}" class="start-btn">Start</a>
    `;

    quizListContainer.appendChild(questionEl);
    globalIndex++;
  });
});
