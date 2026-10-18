const https = require("https");
https.get("https://sagespace.au/wp-content/themes/sagespace/dist/assets/css/app.css?ver=2.10.4", (res) => {
  let data = "";
  res.on("data", (chunk) => data += chunk);
  res.on("end", () => {
    const fonts = data.match(/@font-face\s*\{[^}]+\}/gi);
    console.log("FONTS FOUND:\n", fonts ? fonts.slice(0, 10).join("\n\n") : "none");
    const families = [...new Set(data.match(/font-family:[^;]+/gi) || [])];
    console.log("FAMILIES:\n", families.slice(0, 20).join("\n"));
  });
});
