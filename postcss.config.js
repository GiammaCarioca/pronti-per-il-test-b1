module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./public/prova01/*.html", "./public/prova02/*.html"],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
