const quizListContainer = document.getElementById("quiz-list");
const scoreDisplay = document.getElementById("overall-score");
const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", () => {
  if (
    confirm(
      "Are you sure you want to clear all saved answers and scores? This action is not recoverable."
    )
  ) {
    localStorage.removeItem("quiz-progress");
    window.location.reload();
  }
});

// Combine all chapters' data into a single array
const allQuizData = chapterMeta;

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
      <a href="quiz.html?question=${globalIndex}" class="start-btn">Review</a>
    `;

    quizListContainer.appendChild(questionEl);
    globalIndex++;
  });
});
