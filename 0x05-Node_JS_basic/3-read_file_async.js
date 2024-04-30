// 3-read_file_async.js
const fs = require('fs').promises;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const students = data.trim().split('\n').map(line => line.split(','));
    const csStudents = students.filter(student => student[3] === 'CS');
    const sweStudents = students.filter(student => student[3] === 'SWE');
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student[0]).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student[0]).join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

