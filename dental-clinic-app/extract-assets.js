const fs = require("fs");
const path = require("path");

const filePath = "C:/Users/Saurabh Singh/.gemini/antigravity-ide/brain/b8f5e7d9-60f1-4907-9868-39b03e3681a4/.system_generated/steps/35/content.md";
const html = fs.readFileSync(filePath, "utf8");

const imgRegex = /https:\/\/sagespace\.au\/wp-content\/uploads\/[^\s"'>\)]+\.(?:webp|png|jpg|jpeg)/gi;
const matches = [...new Set(html.match(imgRegex) || [])];

console.log("Found images:", matches.length);
fs.writeFileSync(path.join(__dirname, "extracted_images.json"), JSON.stringify(matches, null, 2));
