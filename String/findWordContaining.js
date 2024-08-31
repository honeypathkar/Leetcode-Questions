/* 2942. Find Words Containing Character
Acceptance Rate: 88.7% */

/* Test Case:
input: words = ["leet","code"], x = "e"
Expected output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1. */

var findWordsContaining = function (words, x) {
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) {
      arr.push(i);
    }
  }
  return arr;
};

console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a"));
