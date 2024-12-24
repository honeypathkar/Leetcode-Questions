/* 1281. Subtract the Product and Sum of Digits of an Integer
Acceptance Rate: 86.6% */

/* Test Case:
input: n = 234
Expected output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15 */

var subtractProductAndSum = function (n) {
  const numStr = String(n);
  const digits = numStr.split("");

  let product = 1;
  let sum = 0;
  for (const digit of digits) {
    product *= digit;
  }

  for (const digit of digits) {
    sum += parseInt(digit);
  }
  return product - sum;
};

console.log(subtractProductAndSum(234));
console.log(subtractProductAndSum(4421));
