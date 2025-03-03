import '../readfile.js';
import readFile from '../readfile.js';

var frequency = '0';
const input = readFile('day1Input.txt').split('\n');

/**
 * @param {string} a ${2}
 */
function applyFreq(a) {
  frequency += a;
  print(frequency);
}

input.forEach(() => applyFreq(a));
print(frequency);
