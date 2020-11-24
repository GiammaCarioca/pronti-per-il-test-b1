import service from "./machine.js";
import getSolutions from "../solutions.js";

const pathArray = window.location.pathname.split("/");
const filePath = pathArray[pathArray.length - 1].substring(0, 4);
const directoryPath = pathArray[pathArray.length - 2];

const allSolutions = getSolutions()[`${directoryPath}`];
const solutions = allSolutions[filePath];

const form = `${filePath}`;
const esercizio = document.getElementById(form);

const data = Array.from(esercizio.querySelectorAll("div[data-risp]"));

const checkAnswer = (answer, idx) => (answer === solutions[idx] ? true : false);

const addClassRight = (idx) => data[idx].parentNode.classList.add("right");

const addClassWrong = (idx) => data[idx].parentNode.classList.add("error");

esercizio.addEventListener("change", (e) => {
  e.target.checked && (e.target.parentNode.dataset.risp = e.target.value);
  service.send("INPUT");
});

esercizio.addEventListener("submit", (e) => {
  e.preventDefault();

  const answers = data.map((item) => item.dataset.risp);

  if (!answers) return;

  answers.forEach((answer, idx) => {
    data[idx].parentNode.classList.remove("right");
    data[idx].parentNode.classList.remove("error");

    checkAnswer(answer, idx) ? addClassRight(idx) : addClassWrong(idx);
  });

  service.send("SUBMIT");

  service.stop();
});

service.start();
