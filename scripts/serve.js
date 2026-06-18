/* Tiny static dev server for app/ with no-store headers, so edits show up
   immediately (no browser HTTP cache). Offline still works via the SW cache. */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "app");
const PORT = 8000;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
};

http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p === "/" || p === "") p = "/index.html";
    const fp = path.join(ROOT, path.normalize(p));
    if (!fp.startsWith(ROOT)) { res.writeHead(403); res.end("forbidden"); return; }
    fs.readFile(fp, (err, data) => {
      if (err) { res.writeHead(404); res.end("not found"); return; }
      res.writeHead(200, {
        "Content-Type": TYPES[path.extname(fp)] || "application/octet-stream",
        "Cache-Control": "no-store, no-cache, must-revalidate",
      });
      res.end(data);
    });
  })
  .listen(PORT, () => console.log("serving app/ on http://localhost:" + PORT));
