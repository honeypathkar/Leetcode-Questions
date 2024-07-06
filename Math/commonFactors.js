/* 2427. Numbers of Common Factors
Accepttance Rate: 79.0% */

/* Test Case:
input: a = 12, b = 6
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.
Expexted Output: 4 */

var commonFactors = function (a, b) {
  let max = Math.max(a, b);
  let arr = [];
  for (let i = 1; i <= max; i++) {
    if (a % i === 0 && b % i === 0) {
      arr.push(i);
    }
  }
  return arr.length;
};

console.log(commonFactors(12, 6));
console.log(commonFactors(25, 30));
