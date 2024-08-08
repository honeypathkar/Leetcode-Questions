/* 387. First Unique Character in a String
Acceptance Rate: 62.4% */

/* Test Case:
input: s = "leetcode"
Expected output: 0 
Explanation: The first character "l" appear only one time so we return it's index 0*/

var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let firstIndex = s.indexOf(s[i]);
    let lastIndex = s.lastIndexOf(s[i]);

    if (firstIndex === lastIndex) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
