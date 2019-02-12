
// set up a bitMask to store the 4 states we care about:
// divisible by 3 | div by 2
const getMask = num => (!(num % 3) << 1) | !(num % 2);


/**
 * @author Jason Seminara <jseminara@gmail.com>
 * @param {string} n - the max number (inclusive) to evaluate
 * @desc prints all of the positive integers from 1 to n,
 * decides whether the number is odd/even/div by 3/div by 2,3
 * @return undefined
 */
function optimizedMath(n) {
  const cannedResponses = [
    'odd',
    'even',
    'divisible by three',
    'divisible by two and three',
  ];

  for (let i = 1; i <= n; i += 1) {
    console.log(`The number '${i}' is ${cannedResponses[getMask(i)]}.`);
  }
}

module.exports = {
  optimizedMath,
  getMask,
};
