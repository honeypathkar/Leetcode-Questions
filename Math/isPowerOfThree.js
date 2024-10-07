/* 326. Power of Three
cceptamce Rate: 47.1% */

/* Test Case:
input: n = 27
Expected output: true */

var isPowerOfThree = function (n) {
  while (n > 1) {
    n = n / 3;
  }
  return n === 1;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(-1));
