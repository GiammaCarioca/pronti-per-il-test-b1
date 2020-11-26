(function () {
  const XState = window.XState;
  const { Machine, interpret } = XState; // global variable: window.XState

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

    if (state.matches("unanswered")) {
      document.querySelector(".btn").classList.add("disabled");
      document.querySelector(".btn").setAttribute("disabled", true);
    }

    if (state.matches("answered")) {
      document.querySelector(".btn").classList.remove("disabled");
      document.querySelector(".btn").removeAttribute("disabled");
    }
  });

  export default service;
})();
