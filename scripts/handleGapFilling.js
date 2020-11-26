(function () {
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

    const fields = Array.from(esercizio.querySelectorAll("input[type='text']"));
    const textFields = fields.filter((field) => field.value);

    textFields?.forEach((field) => {
      field.classList.remove("right");
      field.classList.remove("error");

      answers[field.name] === solutions[field.name]
        ? field.classList.add("right")
        : field.classList.add("error");
    });
  };

  esercizio?.addEventListener("keyup", (e) => {
    answers[e.target.name] = normalizeAnswer(e.target.value);

    // Send event
    // service.send("INPUT");
  });

  esercizio?.addEventListener("submit", (e) => {
    e.preventDefault();

    checkAnswers(answers, solutions);

    // service.send("SUBMIT");

    // Stop the service when you are no longer using it.
    // service.stop();
  });

  // Start the service
  // service.start();
})();
