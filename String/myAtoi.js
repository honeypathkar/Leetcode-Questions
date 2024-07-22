/* 8. String to Integer (atoi)
Acceptance Rate: 17.6% */

/* Test Case:
input: s = "42"
Expexted output: 42
Explanation:
The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in) */

var myAtoi = function (s) {
  let num = parseInt(s);
  if (num) {
    if (num <= -2147483648) {
      return -2147483648;
    } else if (num >= 2147483647) {
      return 2147483647;
    } else {
      return num;
    }
  }
  return 0;
};

console.log(myAtoi("42"));
console.log(myAtoi("1337c0d3"));
