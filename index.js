/**
 * @author Jason Seminara <jseminara@gmail.com>
 * @since 2019-02-10
 * @param {number} num - number to evaluate
 * @desc decides whether the number is odd/even/div by 3/div by 2,3
 * :
 * We're tracking 2 states: divisible by 2 or 3.
 * We can easily and reliably store this in 2 bits [00]
 * [divisible by 3, div by 2]
 *
 * +--------+---------+---------------------------+
 * | Binary | Decimal |          Value            |
 * +--------+---------+---------------------------+
 * |     00 |       0 | odd  (not divisible by 2) |
 * |     01 |       1 | even (divisible by 2)     |
 * |     10 |       2 | div by 3, not by 2 (odd)  |
 * |     11 |       3 | div by 3 AND 2 (even      |
 * +--------+---------+---------------------------+
 * @return {binary} two-bit mask representing the 4 states we care about
 */
const getMask = num => (!(num % 3) << 1) | !(num % 2);

const cannedResponses = [
  'odd',
  'even',
  'divisible by three',
  'divisible by two and three',
];

/**
 * @func optimizedMath
 * @param {string} n - the max number (inclusive) to evaluate
 * @desc prints all of the positive integers from 1 to n,
 * decides whether the number is odd/even/div by 3/div by 2,3
 * @return undefined
 * @since 2019-02-10
 */
function optimizedMath(n) {
  for (let i = 1; i <= n; i += 1) {
    console.log(`The number '${i}' is ${cannedResponses[getMask(i)]}.`);
  }
}

module.exports = {
  optimizedMath,
  getMask,
};
