import readFile from '../readfile.js';
var c = [];
var frequency = 0;
let freqArray = [0];
const input = readFile('day1Input.txt').split('\n');

for (let i in input) {
  let inp = parseInt(input[i]);
  frequency += inp;
  if (freqArray.includes(frequency)) {
    console.log(frequency, freqArray);
  }
  freqArray.push(frequency);
}

console.log(frequency);
