const STORAGE_KEY = "quiz-progress";

function getStoredProgress() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function saveAnswer(index, selected, correct) {
  const progress = getStoredProgress();
  progress[index] = {
    selected,
    correct,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getQuizScore(data = quizData) {
  const progress = getStoredProgress();
  const total = data.length;
  const correct = Object.values(progress).filter((q) => q.correct).length;
  return {
    correct,
    total,
    percentage: total ? Math.round((correct / total) * 100) : 0,
  };
}
