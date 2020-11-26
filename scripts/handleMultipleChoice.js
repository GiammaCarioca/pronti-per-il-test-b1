(function () {
  const pathArray = window.location.pathname.split("/");
  const filePath = pathArray[pathArray.length - 1].substring(0, 4);
  const directoryPath = pathArray[pathArray.length - 2];

  const allSolutions = getSolutions()[`${directoryPath}`];
  const solutions = allSolutions[filePath];

  const form = `${filePath}`;
  const esercizio = document.getElementById(form);

  const answers = {};

  const checkAnswers = (answers, solutions) => {
    if (!answers || !solutions) return;

    const fields = Array.from(
      esercizio.querySelectorAll("input[type='radio']")
    );
    const checkedFields = fields.filter((field) => field.checked);

    checkedFields?.forEach((field) => {
      field.parentNode.parentNode.querySelectorAll("label").forEach((label) => {
        label.classList.remove("right");
        label.classList.remove("error");
      });

      answers[field.name] === solutions[field.name]
        ? field.parentNode.classList.add("right")
        : field.parentNode.classList.add("error");
    });
  };

  esercizio?.addEventListener("change", (e) => {
    e.target.checked && (answers[e.target.name] = e.target.value);

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
