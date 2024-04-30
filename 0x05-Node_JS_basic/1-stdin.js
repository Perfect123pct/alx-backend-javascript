// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf8');

process.stdin.on('data', (name) => {
  if (name !== '\n') {
    console.log(`Your name is: ${name.trim()}`);
  } else {
    console.log('This important software is now closing');
    process.exit();
  }
});

