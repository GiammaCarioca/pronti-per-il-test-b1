module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy("./src/assets/images/");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
    },
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
