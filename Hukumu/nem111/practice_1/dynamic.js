const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const file = req.url === "/" ? "./" : `.${req.url}`;

  try {
    const stats = fs.statSync(file);
    if (stats.isDirectory()) {
      const files = fs.readdirSync(file);

      res.setHeader("Content-Type", "text/html");
      const fileList = files
        .map((fileName) => {
          const filePath = path.join(file, fileName);
          const fileStats = fs.lstatSync(filePath);
          const icon = fileStats.isDirectory() ? "&#128193;" : "&#128441;";
          return `<li><a href="${path.join(req.url, fileName)}">${icon} ${fileName}</a></li>`;
        })
        .join("");

      const htmlResponse = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Directory Listing</title>
          </head>
          <body>
            <h1>Directory Listing</h1>
            <ul>
              ${fileList}
            </ul>
          </body>
        </html>
      `;

      res.end(htmlResponse);
    } else {
      const fileContent = fs.readFileSync(file, "utf-8");
      res.setHeader("Content-Type", "text/plain");
      res.end(fileContent);
    }
  } catch (err) {
    console.error(err);
    res.setHeader("Content-Type", "text/plain");
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports = server;
