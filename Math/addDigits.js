/* 258. Add Digits 
Accpetance Rate: 67.2% */

/* Test Case:
input: num = 38
Expected output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it. */

var addDigits = function (num) {
  let res = num;

  while (res >= 10) {
    let sum = 0;
    let digits = res.toString().split("").map(Number);

    for (let digit of digits) {
      sum += digit;
    }

    res = sum;
  }

  return res;
};

console.log(addDigits(38));
console.log(addDigits(526));
