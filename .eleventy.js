import fs from "fs";
import path from "path";

import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

export default function (eleventyConfig) {
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

  // compile tailwind before eleventy processes the files
  eleventyConfig.on("eleventy.before", async () => {
    const tailwindInputPath = path.resolve("./website/styles/main.css");

    const tailwindOutputPath = "./_site/styles/main.css";

    const cssContent = fs.readFileSync(tailwindInputPath, "utf8");

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  const processor = postcss([tailwindcss()]);

  return {
    dir: {
      input: "website",
    },
  };
}
