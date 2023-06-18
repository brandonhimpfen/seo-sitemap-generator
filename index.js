const { create } = require("xmlbuilder2");

/**
 * Generate XML sitemap for the given URLs.
 * @param {string[]} urls - Array of URLs to include in the sitemap.
 * @returns {string} - The generated XML sitemap as a string.
 */
function generateSitemap(urls) {
  const root = create({ version: "1.0", encoding: "UTF-8" }).ele("urlset");

  urls.forEach((url) => {
    root.ele("url").ele("loc").txt(url);
  });

  return root.end({ prettyPrint: true });
}

module.exports = {
  generateSitemap,
};
