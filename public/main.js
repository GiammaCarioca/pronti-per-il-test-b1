const solutions = ["c"];

const form = "esercizio01";
const esercizio = document.getElementById(form);

const fields = Array.from(esercizio.querySelectorAll("input[type='radio']"));

esercizio.addEventListener("change", (e) => {
  // if field is checked then pass the value to the parent
  fields.forEach((field, idx) => {
    field.checked
      ? (field.parentNode.parentNode.dataset.risp = field.value)
      : "";
  });
});

esercizio.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Array.from(esercizio.querySelectorAll("span[data-risp]"));
  const answers = data.map((item) => item.dataset.risp);

  const checkAnswer = (answer, idx) =>
    answer === solutions[idx].toString() ? true : false;

  answers.forEach((answer, idx) => {
    if (!answer) return;

    if (checkAnswer(answer, idx)) {
      data[idx]
        .querySelector(`input[value="${answer}"]`)
        .parentNode.classList.add("right");

      // document.getElementsByTagName("button")[0].style.visibility = "hidden";
    } else {
      data[idx]
        .querySelector(`input[value="${answer}"]`)
        .parentNode.classList.add("error");
    }
  });
});
