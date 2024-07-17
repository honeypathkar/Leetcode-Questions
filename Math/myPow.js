/* 50. Pow(x, n)
Acceptance Rate: 35.2% */

/* Test Case: 
input: x = 2.00000, n = -2
Expected output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25 */

var myPow = function (x, n) {
  let res = x ** n;
  return res;
};

console.log(myPow(2.0, -2));
