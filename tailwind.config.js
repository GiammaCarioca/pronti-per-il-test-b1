const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    function ({ e, addUtilities }) {
      const newUtilities = {
        ".error": {
          backgroundColor: "rgba(255, 191, 190, 1)",
          border: "1px solid rgba(255, 0, 0, 1)",
          borderRadius: "4px",
          font: "inherit",
          lineHeight: "1.5em",
          // padding: "0.5em 3.5em 0.5em 1em",
        },
        ".right": {
          backgroundColor: "rgba(150, 255, 91, 1)",
          border: "1px solid rgba(0, 155, 0, 1)",
          borderRadius: "4px",
          font: "inherit",
          lineHeight: "1.5em",
          // padding: "0.5em 3.5em 0.5em 1em",
        },
        ".select": {
          backgroundColor: "rgba(200, 200, 200, 0.4)",
          border: "1px solid transparent",
          borderRadius: "4px",
          display: "inline-block",
          font: "inherit",
          lineHeight: "1.5em",

          /* reset */
          margin: "0.1em",
          // -webkit-box-sizing: "border-box",
          // -moz-box-sizing: "border-box",
          boxSizing: "border-box",
          // -webkit-appearance: "none",
          // -moz-appearance: "none"
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
