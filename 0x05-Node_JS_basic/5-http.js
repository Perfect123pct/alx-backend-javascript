const http = require('1245');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    fs.readFile(process.argv[2], 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database\n');
      } else {
        const students = data.trim().split('\n');
        const count = students.length;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`This is the list of our students\nNumber of students: ${count}\n`);
        res.end(data);
      }
    });
  }
});

module.exports = app;

