function getBarColor(score) {
  if (score <= 30) return "#e74c3c"; // Red
  if (score < 70) return "#f39c12"; // Orange
  return "#2ecc71"; // Green
}

const allQuizData = [
  ...quizDataCh1,
  ...quizDataCh2,
  ...quizDataCh3,
  ...quizDataCh4,
  ...quizDataCh5,
  ...quizDataCh6,
  ...quizDataCh7,
  ...quizDataCh8,
  ...quizDataCh9,
  ...quizDataCh10,
  ...quizDataCh11,
];

const progress = getStoredProgress();

// === Overall Score ===
const total = allQuizData.length;
const correct = Object.values(progress).filter((q) => q.correct).length;
const percentage = Math.round((correct / total) * 100);

document.getElementById(
  "overall-score-text"
).textContent = `${percentage}% (${correct} correct out of ${total})`;

new Chart(document.getElementById("overall-score-chart"), {
  type: "bar",
  data: {
    labels: ["Overall"],
    datasets: [
      {
        label: "Score (%)",
        data: [percentage],
        backgroundColor: [getBarColor(percentage)],
        borderRadius: 6,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: { max: 100, beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "right",
        formatter: (value) => `${value}%`,
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});

// === Score by Chapter (11 groups) ===
const chapterDataSets = chapterMeta;

const chapterLabels = [];
const chapterScores = [];
const weakChapters = [];
let globalIndex = 0;

chapterDataSets.forEach((chapter) => {
  const total = chapter.data.length;
  let correct = 0;

  for (let i = 0; i < total; i++) {
    if (progress[globalIndex]?.correct) {
      correct++;
    }
    globalIndex++;
  }

  const percent = Math.round((correct / total) * 100);
  chapterLabels.push(chapter.title); // Only show "Chapter X"
  chapterScores.push(percent);

  if (percent < 70) {
    weakChapters.push({ chapter: chapter.chapter, title: chapter.title });
  }
});

// Score Message
const messageEl = document.getElementById("overall-score-message");
let messageText = "";
let messageClass = "";

if (percentage <= 30) {
  messageText = "Keep Practicing! You’re just getting started.";
  messageClass = "red";
} else if (percentage < 70) {
  messageText = "Good effort! You're on your way.";
  messageClass = "orange";
} else {
  messageText = "Great job! You’ve got a strong grasp of the material.";
  messageClass = "green";
}

messageEl.textContent = messageText;
messageEl.className = `score-message ${messageClass}`;

// Render chapter score chart
new Chart(document.getElementById("chapter-score-chart"), {
  type: "bar",
  data: {
    labels: chapterLabels,
    datasets: [
      {
        label: "Score (%)",
        data: chapterScores,
        backgroundColor: chapterScores.map((score) => getBarColor(score)),
        borderRadius: 6,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        max: 100,
        beginAtZero: true,
        ticks: { color: "#aaa" },
      },
      y: {
        ticks: {
          color: "#ccc",
          font: { size: 13 },
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      datalabels: {
        color: "#fff",
        anchor: "end",
        align: "right",
        formatter: (value) => `${value}%`,
        font: {
          weight: "bold",
          size: 12,
        },
      },
    },
  },
  plugins: [ChartDataLabels],
});

// === Recommendations Section ===
const weakEl = document.getElementById("weak-sections");
if (weakChapters.length > 0) {
  weakEl.innerHTML = `
      <p>Explore the following chapters:</p>
      <ul class="weak-list">
        ${weakChapters
          .map((ch) => `<li>${ch.chapter}: ${ch.title}</li>`)
          .join("")}
      </ul>
    `;
}
