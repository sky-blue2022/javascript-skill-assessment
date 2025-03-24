
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

const assessmentMode = JSON.parse(localStorage.getItem("assessmentMode") || "{}");
const selectedIndexes = assessmentMode.selectedIndexes || allQuizData.map((_, i) => i);
const progress = getStoredProgress();

// === Overall Score ===
const total = selectedIndexes.length;
const correct = selectedIndexes.filter(i => progress[i]?.correct).length;
const percentage = Math.round((correct / total) * 100);

document.getElementById("overall-score-text").textContent =
  percentage + "% (" + correct + " correct out of " + total + ")";

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

new Chart(document.getElementById("overall-score-chart"), {
  type: "bar",
  data: {
    labels: ["Overall"],
    datasets: [{
      label: "Score (%)",
      data: [percentage],
      backgroundColor: [getBarColor(percentage)],
      borderRadius: 6,
    }]
  },
  options: {
    indexAxis: "y",
    layout: { padding: { right: 30 } },
    scales: {
      x: { max: 100, beginAtZero: true },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
      datalabels: {
        anchor: 'end',
        align: 'right',
        formatter: value => value + "%",
        color: '#fff',
        font: {
          weight: 'bold',
          size: 12
        },
        clamp: true,
        clip: false
      }
    }
  },
  plugins: [ChartDataLabels]
});

// === Score by Chapter (Grouped only by selectedIndexes) ===
const chapterLabels = [];
const chapterScores = [];
const weakChapters = [];
let globalIndex = 0;
let selectedIndexSet = new Set(selectedIndexes);

chapterMeta.forEach((chapter) => {
  let chapterTotal = 0;
  let chapterCorrect = 0;

  for (let i = 0; i < chapter.data.length; i++) {
    const realIndex = globalIndex;
    if (selectedIndexSet.has(realIndex)) {
      chapterTotal++;
      if (progress[realIndex]?.correct) {
        chapterCorrect++;
      }
    }
    globalIndex++;
  }

  if (chapterTotal > 0) {
    const percent = Math.round((chapterCorrect / chapterTotal) * 100);
    chapterLabels.push(`${chapter.chapter}: ${chapter.title}`);
    chapterScores.push(percent);

    if (percent < 70) {
      weakChapters.push({ chapter: chapter.chapter, title: chapter.title });
    }
  }
});

// Render chapter score chart
new Chart(document.getElementById("chapter-score-chart"), {
  type: "bar",
  data: {
    labels: chapterLabels,
    datasets: [{
      label: "Score (%)",
      data: chapterScores,
      backgroundColor: chapterScores.map(score => getBarColor(score)),
      borderRadius: 6
    }]
  },
  options: {
    indexAxis: "y",
    responsive: true,
    layout: {
      padding: {
        right: 50
      }
    },
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
        clamp: true,
        clip: false,
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
      ${weakChapters.map(ch => `<li>${ch.chapter}: ${ch.title}</li>`).join("")}
    </ul>
  `;
}
