const { Machine, actions, interpret } = XState; // global variable: window.XState

const correctionMachine = Machine({
  // Initial state
  initial: "unanswered",
  // State definitions
  states: {
    unanswered: {
      on: {
        // state transition (shorthand)
        // this is equivalent to { target: 'answered' }
        // INPUT is an event
        INPUT: {
          target: "answered",
        },
      },
    },
    answered: {
      on: {
        SUBMIT: "corrected",
      },
    },
    corrected: {
      type: "final",
    },
  },
});

// Interpret the machine, and add a listener for whenever a transition occurs.
const service = interpret(correctionMachine).onTransition((state) => {
  console.log(state.value);

  if (state.matches("corrected")) {
    return document
      .querySelectorAll("input[type=radio]")
      .forEach((item) => item.setAttribute("disabled", true));
  }
});

// Start the service
service.start();

const solutions = ["c"];

const form = "esercizio01";
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
