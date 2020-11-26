import service from "./machine.js";
import getSolutions from "../solutions.js";

const pathArray = window.location.pathname.split("/");
const filePath = pathArray[pathArray.length - 1].substring(0, 4);
const directoryPath = pathArray[pathArray.length - 2];

const allSolutions = getSolutions()[`${directoryPath}`];
const solutions = allSolutions[filePath];

const form = `${filePath}`;
const esercizio = document.getElementById(form);

const answers = {};

const normalizeAnswer = (answer) => {
  return answer.trim().toLowerCase();
};

const checkAnswers = (answers, solutions) => {
  if (!answers || !solutions) return;

  const optionElements = Array.from(
    esercizio.querySelectorAll("option:checked")
  );

  const optionsChecked = optionElements.filter((option) => option.value !== "");

  optionsChecked?.forEach((option) => {
    const currentSelect = option.parentNode;

    currentSelect.classList.remove("right");
    currentSelect.classList.remove("error");

    answers[currentSelect.name] === solutions[currentSelect.name]
      ? currentSelect.classList.add("right")
      : currentSelect.classList.add("error");
  });
};

esercizio?.addEventListener("change", (e) => {
  answers[e.target.name] = normalizeAnswer(e.target.value);

  // Send event
  service.send("INPUT");
});

esercizio?.addEventListener("submit", (e) => {
  e.preventDefault();

  checkAnswers(answers, solutions);

  service.send("SUBMIT");

  // Stop the service when you are no longer using it.
  service.stop();
});

// Start the service
service.start();
