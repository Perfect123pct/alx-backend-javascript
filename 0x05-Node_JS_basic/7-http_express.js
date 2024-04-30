const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Cannot load the database');
    } else {
      const students = data.trim().split('\n');
      const count = students.length;
      res.status(200).send(`This is the list of our students\nNumber of students: ${count}\n${data}`);
    }
  });
});

module.exports = app;

