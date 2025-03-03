import '../readfile.js';
import readFile from '../readfile.js';

var frequency = 0;
const input = readFile('day1Input.txt').split('\n');

/**
 * @param {number} a
 */
function applyFreq(a) {
  frequency += parseInt(a);
}

input.forEach((a) => applyFreq(a))

console.log(frequency);
