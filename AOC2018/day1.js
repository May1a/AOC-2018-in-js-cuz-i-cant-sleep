import '../readfile.js';
import readFile from '../readfile.js';
var c = 0;
var frequency = 0;
const input = readFile('day1Input.txt').split('\n');

for (let i in input) {
  let inp = parseInt(input[i]);
  frequency += inp
}


console.log(frequency);
