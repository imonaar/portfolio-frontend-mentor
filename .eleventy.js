module.exports = (config) => {
  config.addPassthroughCopy("./src/images/");
  config.addPassthroughCopy("./src/scripts/index.js");
  config.addWatchTarget("./src/styles/");
  config.addCollection("projects", (collection) => {
    return collection.getFilteredByGlob("./src/projects/*.md");
  });
  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
