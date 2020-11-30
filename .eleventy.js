module.exports = function (eleventyConfig) {
  // You can return your Config object (optional).
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["html", "md", "njk"],
    passthroughFileCopy: true,
  };
};
