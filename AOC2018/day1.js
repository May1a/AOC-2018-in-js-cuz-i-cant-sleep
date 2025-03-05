import '../readfile.js';
import readFile from '../readfile.js';
var c = new Set([0]);
var frequency = 0;
const input = readFile('day1Input.txt').split('\n').map(Number);
while(true) {
for (let i in input) {
  frequency += input[i];
  if (c.has(frequency)) { console.log(frequency); process.exit(); }
  c.add(frequency);
}
}

console.log(frequency);
