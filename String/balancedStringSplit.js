/* 1221. Split a String in Balanced Strings
Acceptance Rate: 86.5% */

/* Test Case:
Input: s = "RLRRRLLRLL"
Output: 2
Explanation: s can be split into "RL", "RRRLLRLL", each substring contains same number of 'L' and 'R'.
Note that s cannot be split into "RL", "RR", "RL", "LR", "LL", because the 2nd and 5th substrings are not balanced. */

var balancedStringSplit = function (s) {
  let balanceCount = 0;
  let count = 0;
  for (let char of s) {
    count += char === "L" ? 1 : -1;
    if (count == 0) balanceCount++;
  }
  return balanceCount;
};

console.log(balancedStringSplit("RLRRRLLRLL"));
console.log(balancedStringSplit("RLRRLLRLRL"));
