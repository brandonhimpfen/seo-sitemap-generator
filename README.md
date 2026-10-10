# seo-sitemap-generator

[![Support Open Work](https://img.shields.io/badge/Support-Open%20Work-0A0A0A?style=flat&logo=github)](https://github.com/brandonhimpfen/support) 
[![GitHub Sponsor](https://srv-cdn.himpfen.io/badges/github/github-flat.svg)](https://github.com/sponsors/brandonhimpfen) 
[![Buy Me a Coffee](https://srv-cdn.himpfen.io/badges/buymeacoffee/buymeacoffee-flat.svg)](https://buymeacoffee.com/brandonhimpfen) 
[![Ko-Fi](https://srv-cdn.himpfen.io/badges/kofi/kofi-flat.svg)](https://ko-fi.com/brandonhimpfen) 
[![PayPal](https://srv-cdn.himpfen.io/badges/paypal/paypal-flat.svg)](https://paypal.me/brandonhimpfen)

Generate XML sitemaps for websites, helping search engines discover and index pages efficiently.

## Installation

You can install `seo-sitemap-generator` using npm:

```
npm install seo-sitemap-generator
```

## Usage

To use seo-sitemap-generator, follow these steps:

Import the `generateSitemap` function from the package:

```
const { generateSitemap } = require("seo-sitemap-generator");
```

Prepare an array of URLs to include in the sitemap:

```
const urls = [
  "https://example.com/",
  "https://example.com/about",
  "https://example.com/contact",
  // Add more URLs as needed
];
```

Generate the XML sitemap using the `generateSitemap` function:

```
const sitemap = generateSitemap(urls);
```

The `sitemap` variable will contain the generated XML sitemap as a string.

You can then save the sitemap to a file, send it as a response in an HTTP request, or perform any other necessary operations with it.
