/* 504. Base 7
Acceptance Rate: 50.5% */

/* Test Case:
input: num = 100
Expected output: "202" 
Explanation: The convertion of "100" in Base 7 is "202"*/

var convertToBase7 = function (num) {
  return num.toString(7);
};

console.log(convertToBase7(100));
console.log(convertToBase7(-7));
