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
    require("@tailwindcss/custom-forms"),
    function ({ e, addUtilities }) {
      const newUtilities = {
        ".error": {
          backgroundColor: "#f56565",
          borderRadius: "4px",
          font: "inherit",
          color: "#f7fafc",
          lineHeight: "1.5em",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        },
        ".right": {
          backgroundColor: "#48bb78",
          borderRadius: "4px",
          font: "inherit",
          color: "#f7fafc",
          lineHeight: "1.5em",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
          boxSizing: "border-box",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
