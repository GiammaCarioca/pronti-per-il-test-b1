import service from "../machine.js";
import getSolutions from "../../solutions.js";

const pathArray = window.location.pathname.split("/");
// console.log(pathArray);

const filePath = pathArray[3].substring(0, 4);
// console.log(filePath);

const directoryPath = pathArray[2];
// console.log(directoryPath);

const solutions = getSolutions()[`${directoryPath}`];

const form = `${filePath}`;
const esercizio = document.getElementById(form);

const data = Array.from(esercizio.querySelectorAll("div[data-risp]"));

const checkAnswer = (answer, idx) =>
  answer === solutions[idx].toString() ? true : false;

const addClassRight = (answer, idx) =>
  data[idx]
    .querySelector(`input[value="${answer}"]`)
    .parentNode.classList.add("right");

const addClassWrong = (answer, idx) =>
  data[idx]
    .querySelector(`input[value="${answer}"]`)
    .parentNode.classList.add("error");

esercizio.addEventListener("change", (e) => {
  e.target.checked &&
    (e.target.parentNode.parentNode.dataset.risp = e.target.value);

  // Send event
  service.send("INPUT");
});

esercizio.addEventListener("submit", (e) => {
  e.preventDefault();

  const answers = data.map((item) => item.dataset.risp);

  if (!answers) return;

  answers.forEach((answer, idx) =>
    checkAnswer(answer, idx)
      ? addClassRight(answer, idx)
      : addClassWrong(answer, idx)
  );

  service.send("SUBMIT");

  // Stop the service when you are no longer using it.
  service.stop();
});

// Start the service
service.start();
