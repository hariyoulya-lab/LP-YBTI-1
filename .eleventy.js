module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("static");

  // Shortcode untuk tahun berjalan (pengganti filter date Liquid)
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: { input: "src", output: "_site" }
  };
};
