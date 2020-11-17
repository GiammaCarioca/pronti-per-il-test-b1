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
