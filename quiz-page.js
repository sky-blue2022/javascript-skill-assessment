
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

const queryParams = new URLSearchParams(window.location.search);
const qIndex = parseInt(queryParams.get("question")) || 0;
const assessmentMode = JSON.parse(localStorage.getItem("assessmentMode") || "{}");
const selectedIndexes = assessmentMode.selectedIndexes || allQuizData.map((_, i) => i);
const quiz = allQuizData[selectedIndexes[qIndex]];

document.addEventListener("DOMContentLoaded", () => {
  const quizTitle = document.getElementById("quiz-title");
  const quizContent = document.getElementById("quiz-content");
  const feedback = document.getElementById("feedback");
  const submitBtn = document.getElementById("submit-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  function handleInputChange() {
    const inputs = document.querySelectorAll("input[name='option']");
    const anyChecked = Array.from(inputs).some((input) => input.checked);
    submitBtn.disabled = !anyChecked;
  }

  function renderQuestion() {
    if (!quiz) {
      quizContent.innerHTML = "<p>Question not found.</p>";
      submitBtn.disabled = true;
      return;
    }

    quizTitle.textContent = `Q${qIndex + 1}. ${quiz.title}`;
    const sortedKeys = Object.keys(quiz.choices).sort();
    const inputType = quiz.type === "multiple" ? "checkbox" : "radio";

    quizContent.innerHTML = `
      <h3>${quiz.question}</h3>
      <ul class="choice-list">
        ${sortedKeys
          .map(
            (key) => `
          <li>
            <label>
              <input type="${inputType}" name="option" value="${key}" />
              <strong>${key}.</strong> ${quiz.choices[key]}
            </label>
          </li>
        `
          )
          .join("")}
      </ul>
    `;

    submitBtn.disabled = true;
    nextBtn.disabled = true;

    const inputs = quizContent.querySelectorAll("input[name='option']");
    inputs.forEach((input) => {
      input.addEventListener("change", handleInputChange);
    });

    const progress = getStoredProgress();
    const previous = progress[selectedIndexes[qIndex]];
    if (previous) {
      inputs.forEach((input) => {
        if (previous.selected.includes(input.value)) {
          input.checked = true;
        }
      });

      if (previous.correct !== undefined) {
        renderFeedback(previous.selected, previous.correct, false);

        if (qIndex === selectedIndexes.length - 1) {
          nextBtn.textContent = "See Result";
          nextBtn.classList.add("see-result-btn");
          nextBtn.onclick = () => (window.location.href = "assessment.html");
          nextBtn.disabled = false;
        } else {
          nextBtn.textContent = "Next";
          nextBtn.classList.remove("see-result-btn");
          nextBtn.onclick = () =>
            (window.location.href = `quiz.html?question=${qIndex + 1}`);
          nextBtn.disabled = false;
        }
      }

      handleInputChange();
    }

    prevBtn.disabled = qIndex === 0;
  }

  const tooltip = document.getElementById("next-tooltip");
  nextBtn.addEventListener("mouseenter", () => {
    if (nextBtn.disabled) tooltip.classList.add("show");
  });
  nextBtn.addEventListener("mouseleave", () => {
    tooltip.classList.remove("show");
  });

  const submitTooltip = document.getElementById("submit-tooltip");
  submitBtn.addEventListener("mouseenter", () => {
    if (submitBtn.disabled) submitTooltip.classList.add("show");
  });
  submitBtn.addEventListener("mouseleave", () => {
    submitTooltip.classList.remove("show");
  });

  function renderFeedback(selected, isCorrect, showConfetti = false) {
    const sortedKeys = Object.keys(quiz.choices).sort();
    const explanationHtml = sortedKeys
      .map((key) => {
        const explanation = quiz.explanations[key] || "";
        return `
        <li>
          <strong>${key}.</strong> ${explanation}
        </li>
      `;
      })
      .join("");

    feedback.innerHTML = `
      ${
        isCorrect
          ? `<p class="correct">🎉 Congratulations! That's correct.</p>`
          : `<p class="incorrect">❌ That's not correct.</p>`
      }
      <ul>${explanationHtml}</ul>
    `;
    feedback.scrollIntoView({ behavior: "smooth" });

    if (showConfetti && isCorrect && typeof confetti === "function") {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }

    updateProgressBar();
  }

  submitBtn.addEventListener("click", () => {
    const selectedInputs = document.querySelectorAll("input[name='option']:checked");
    const selectedValues = Array.from(selectedInputs).map((input) => input.value).sort();
    const correctValues = quiz.correctAnswers.slice().sort();

    const isCorrect = selectedValues.join(",") === correctValues.join(",");
    saveAnswer(selectedIndexes[qIndex], selectedValues, isCorrect);
    renderFeedback(selectedValues, isCorrect, true);

    if (qIndex === selectedIndexes.length - 1) {
      localStorage.setItem("quizCompleted", "true");
      nextBtn.textContent = "See Result";
      nextBtn.classList.add("see-result-btn");
      nextBtn.onclick = () => window.location.href = "assessment.html";
      nextBtn.disabled = false;
    } else {
      nextBtn.textContent = "Next";
      nextBtn.classList.remove("see-result-btn");
      nextBtn.onclick = () => window.location.href = `quiz.html?question=${qIndex + 1}`;
      nextBtn.disabled = false;
    }
  });

  prevBtn.addEventListener("click", () => {
    if (qIndex > 0) {
      window.location.href = `quiz.html?question=${qIndex - 1}`;
    }
  });

  function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progress = getStoredProgress();
    const answeredCount = selectedIndexes.filter(i => progress[i]).length;
    const percent = Math.round((answeredCount / selectedIndexes.length) * 100);
    progressBar.style.width = `${percent}%`;
  }

  renderQuestion();

  const postLinks = document.getElementById("post-quiz-links");
  if (localStorage.getItem("quizCompleted") === "true") {
    postLinks.style.display = "block";
  }

  updateProgressBar();
});
