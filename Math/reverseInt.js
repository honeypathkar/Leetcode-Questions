/* 7. Reverse Integer
Acceptance Rate: 29.0% */

/* Test Case:
input: x = 123
Expecteed output: 321
Explanation: The reverse of Input: 123 is 321*/

var reverse = function (x) {
  let str = x.toString();
  let reverseStr;
  if (x < 0) {
    reverseStr = str.split("").reverse().join("");
    reverseStr = "-" + reverseStr.slice(0, -1);
  } else {
    reverseStr = str.split("").reverse().join("");
  }
  let num = parseInt(reverseStr);
  if (num < Math.pow(-2, 31) || num > Math.pow(2, 31) - 1) {
    return 0;
  }
  return num;
};

console.log(reverse(123));
console.log(reverse(-123));
