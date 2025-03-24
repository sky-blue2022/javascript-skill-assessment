
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
    localStorage.removeItem("quizCompleted");
    localStorage.removeItem("assessmentMode");
    window.location.reload();
  }
});

// Load full quiz data
const allQuizData = chapterMeta;

let flatQuizData = [];
allQuizData.forEach((section) => {
  flatQuizData = flatQuizData.concat(section.data);
});

const progress = getStoredProgress();
const assessmentMode = JSON.parse(localStorage.getItem("assessmentMode") || "{}");
const selectedIndexes = assessmentMode.selectedIndexes || flatQuizData.map((_, i) => i);

// Calculate score
const filteredData = selectedIndexes.map(i => flatQuizData[i]);
const correctCount = selectedIndexes.filter(i => progress[i]?.correct).length;
const totalCount = selectedIndexes.length;
const percentage = Math.round((correctCount / totalCount) * 100);

scoreDisplay.textContent = `Score: ${percentage}% (${correctCount} correct out of ${totalCount})`;

// Render grouped by chapter
let globalIndex = 0;
let selectedSet = new Set(selectedIndexes);

allQuizData.forEach((section) => {
  const chapterTitle = document.createElement("h2");
  chapterTitle.textContent = `${section.title}`;
  const chapterBlock = document.createElement("div");

  section.data.forEach((q, localIndex) => {
    const realIndex = globalIndex;
    if (!selectedSet.has(realIndex)) {
      globalIndex++;
      return;
    }

    const status = progress[realIndex]
      ? progress[realIndex].correct
        ? "✅ Correct"
        : "❌ Incorrect"
      : "🟡 Not Answered";

    const questionEl = document.createElement("div");
    questionEl.classList.add("quiz-item");

    questionEl.innerHTML = `
      <span class="status">${status}</span>
      <span class="quiz-title">Q${selectedIndexes.indexOf(realIndex) + 1}. ${q.question}</span>
      <a href="quiz.html?question=${selectedIndexes.indexOf(realIndex)}" class="start-btn">Review</a>
    `;

    chapterBlock.appendChild(questionEl);
    globalIndex++;
  });

  if (chapterBlock.children.length > 0) {
    quizListContainer.appendChild(chapterTitle);
    quizListContainer.appendChild(chapterBlock);
  }
});

// === Retake Assessment Button ===
const retakeBtn = document.createElement("button");
retakeBtn.textContent = "🔁 Retake Assessment";
retakeBtn.className = "clear-btn";
retakeBtn.style.display = "block";
retakeBtn.style.margin = "2rem auto";
retakeBtn.onclick = () => {
  if (confirm("This action will clear all data and restart the assessment. Are you sure?")) {
    localStorage.removeItem("quiz-progress");
    localStorage.removeItem("quizCompleted");
    localStorage.removeItem("assessmentMode");
    window.location.href = "index.html";
  }
};

document.querySelector(".quiz-container")?.appendChild(retakeBtn);
