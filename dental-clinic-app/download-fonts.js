const https = require("https");
const fs = require("fs");
const path = require("path");

const fontFiles = [
  "Albra-Light.woff2",
  "AllrounderGrotesk-Medium.woff2"
];

const fontsDir = path.join(__dirname, "public", "fonts");
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

fontFiles.forEach((file) => {
  const url = `https://sagespace.au/wp-content/themes/sagespace/dist/assets/fonts/${file}`;
  const dest = path.join(fontsDir, file);
  const fileStream = fs.createWriteStream(dest);

  https.get(url, (res) => {
    if (res.statusCode === 200) {
      res.pipe(fileStream);
      fileStream.on("finish", () => {
        fileStream.close();
        console.log(`Downloaded ${file} successfully.`);
      });
    } else {
      console.log(`Failed to download ${file}, status: ${res.statusCode}`);
    }
  }).on("error", (err) => {
    console.error(`Error downloading ${file}:`, err.message);
  });
});
