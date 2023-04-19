const http = require('http');
// express.js
const fs = require('fs'); // filesystem
const path = require('path');

const server = http.createServer((req, res) => {
  // Method, url, headers
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'home.html'), (err, content) => {
      if (err) throw err;
      // res.writeHead(200, { 'Content-Type': 'text/html' });
      console.log(content.toString());
      res.end(content);
    });
    return;
  }
  if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'about.html'), (err, content) => {
      if (err) throw err;
      res.end(content);
    });
    return;
  }
  // JSON
  return res.end("['404', 'not found']");
});

server.listen(3000);
