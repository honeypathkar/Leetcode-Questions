/* 541. Reverse String II
Acceptance Rate: 51.3% */

/* Test Case:
Input: s = "abcdefg", k = 2
Output: "bacdfeg" */

var reverseStr = function (s, k) {
  let result = "";
  for (let i = 0; i < s.length; i += 2 * k) {
    let part1 = s
      .substring(i, i + k)
      .split("")
      .reverse()
      .join("");
    let part2 = s.substring(i + k, i + 2 * k);
    result += part1 + part2;
  }
  return result;
};

console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("honey", 3));
