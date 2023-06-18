const { generateSitemap } = require("./index");

// Test data - array of URLs
const urls = [
  "https://example.com/",
  "https://example.com/about",
  "https://example.com/contact",
];

// Generate the sitemap
const sitemap = generateSitemap(urls);

// Log the generated sitemap
console.log(sitemap);
