module.exports = (eleventyConfig) => {
  eleventyConfig.addShortcode("excerpt", (post) => extractExcerpt(post));

  function extractExcerpt(post) {
    if (!post.templateContent) return "";
    if (post.templateContent.indexOf("</p>") > 0) {
      let end = post.templateContent.indexOf("</p>");
      return post.templateContent.substr(0, end + 4);
    }
    return post.templateContent;
  }

  const english = new Intl.DateTimeFormat("en");
  eleventyConfig.addFilter("niceDate", function (d) {
    return english.format(d);
  });

  return {
    dir: {
      input: "website",
    },
  };
};
