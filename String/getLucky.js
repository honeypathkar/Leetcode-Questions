/* 1945. Sum of Digits of String After Convert
Acceptance Rate: 74.9% */

/* Test Case:
input: s = "iiii", k = 1
Expected output: 36
Explanation: The operations are as follows:
- Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
- Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
Thus the resulting integer is 36. */

var getLucky = function (s, k) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    str += BigInt(s.charCodeAt(i) - 96);
  }
  let num = BigInt(str);

  for (let i = 0; i < k; i++) {
    num = num
      .toString()
      .split("")
      .map((item) => BigInt(item))
      .reduce((acc, digit) => BigInt(acc) + BigInt(digit), 0);
  }

  return num.toString();
};

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
