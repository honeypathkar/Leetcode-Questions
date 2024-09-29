/* 507. Perfect Number 
Acceptance Rate: 42.2% */

/* Test Case:
input: num = 28
Expected output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28. */

var checkPerfectNumber = function (num) {
  if (num <= 1) return false;
  let sum = 0;

  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
