import '../readfile.js';
import readFile from '../readfile.js';

var frequency = 0;
const input = readFile('day1Input.txt').split('\n');

for (let i = 0; i < input.length; i++) {
  frequency += parseInt(input[i])
}


console.log(frequency);
