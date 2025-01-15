/* 1967. Number of Strings That Appear as Substrings in Word
Acceptance Rate: 81.6% */

/* Test Case:
input: patterns = ["a","abc","bc","d"], word = "abc"
Expected output: 3
Explanation:
- "a" appears as a substring in "abc".
- "abc" appears as a substring in "abc".
- "bc" appears as a substring in "abc".
- "d" does not appear as a substring in "abc".
3 of the strings in patterns appear as a substring in word. */

var numOfStrings = function (patterns, word) {
  let count = 0;
  for (let pattern of patterns) {
    if (word.includes(pattern)) {
      count++;
    }
  }
  return count;
};

console.log(numOfStrings(["a", "abc", "bc", "d"], "abc"));
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb"));
