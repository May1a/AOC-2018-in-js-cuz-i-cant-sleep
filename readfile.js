import fs from 'node:fs';

/**
 * @param {string} fn ${string}
 * @returns {string}
 */
export default function readFile(fn) {
  const data = fs.readFileSync(fn, 'utf8');
  return data;
}
