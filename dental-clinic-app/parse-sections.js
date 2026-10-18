const fs = require("fs");
const filePath = "C:/Users/Saurabh Singh/.gemini/antigravity-ide/brain/b8f5e7d9-60f1-4907-9868-39b03e3681a4/.system_generated/steps/35/content.md";
const html = fs.readFileSync(filePath, "utf8");

// Extract Ritual cards
const rituals = [];
const ritualRegex = /<div class="carousel-cell[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
// Let's grab booking-options content
const bookingMatch = html.match(/<section class="booking-options[\s\S]*?<\/section>/);
if (bookingMatch) {
  fs.writeFileSync("booking-section.html", bookingMatch[0]);
  console.log("Saved booking-section.html");
}

// Let's grab approach, shop, and gallery
const approachMatch = html.match(/<section class="approach[\s\S]*?<\/section>/);
if (approachMatch) fs.writeFileSync("approach-section.html", approachMatch[0]);

const shopMatch = html.match(/<section class="shop[\s\S]*?<\/section>/);
if (shopMatch) fs.writeFileSync("shop-section.html", shopMatch[0]);

const galleryMatch = html.match(/<section class="img-gallery[\s\S]*?<\/section>/);
if (galleryMatch) fs.writeFileSync("gallery-section.html", galleryMatch[0]);

const quoteMatch = html.match(/<section class="feature-quote[\s\S]*?<\/section>/);
if (quoteMatch) fs.writeFileSync("quote-section.html", quoteMatch[0]);

const testMatch = html.match(/<section class="testimonials[\s\S]*?<\/section>/);
if (testMatch) fs.writeFileSync("test-section.html", testMatch[0]);

const footerMatch = html.match(/<footer class="footer-container[\s\S]*?<\/footer>/);
if (footerMatch) fs.writeFileSync("footer-section.html", footerMatch[0]);

console.log("Done extracting section snippets.");
