const http = require("http");
const fs = require("fs");
const { dirname, extname } = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    return res.end(http.STATUS_CODES[400]);
  }

  const url = req.url;
  if (url === "/raw-html") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write("<h1>Welcome</h1>");
    return res.end();
  }

  if (url === "/users") {
    fs.readFile("./users.json", (err, content) => {
      res.writeHead(200, {
        "Content-type": "application/json",
      });
      return res.end(content);
    });
  }

  let parseUrl = url.replace(/^\/+|\/+$/g, "");

  if (url === "/") {
    parseUrl = "index.html";
  }
  const file = __dirname + "/public/" + parseUrl;

  fs.readFile(file, (err, content) => {
    switch (parseUrl) {
      case "index.html":
        res.writeHead(200, { "Content-type": "text/html" });
        break;
      case "index.js":
        res.writeHead(200, { "Content-type": "text/javascript" });
        break;
      case "style.css":
        res.writeHead(200, { "Content-type": "text/css" });
        break;
    }

    return res.end(content);
  });
});

server.listen(port, () => {
  console.log("Server listening on port");
});
