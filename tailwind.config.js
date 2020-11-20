const plugin = require("tailwindcss/plugin");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  variants: { backgroundColor: ["checked"] },
  plugins: [
    require("@tailwindcss/custom-forms"),
    function ({ e, addUtilities }) {
      const newUtilities = {
        ".custom": {
          cursor: "pointer",
          borderRadius: "50%",
          padding: "0.6rem",
          fontFamily: "monospace",
          textTransform: "lowercase",
          border: "1px solid transparent",
          backgroundColor: "rgba(107, 184, 218, 0.4)",
        },
        // ".select": {
        //   backgroundColor: "rgba(200, 200, 200, 0.4)",
        //   border: "1px solid transparent",
        //   borderRadius: "4px",
        //   display: "inline-block",
        //   font: "inherit",
        //   lineHeight: "1.5em",
        //   /* reset */
        //   margin: "0.1em",
        //   boxSizing: "border-box",
        // },
      };

      addUtilities(newUtilities);
    },
  ],
};
