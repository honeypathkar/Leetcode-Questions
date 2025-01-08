/* 1408. String Matching in an Array
Acceptance Rate: 69.9% */

/* Test Case:
input: words = ["mass","as","hero","superhero"]
Expected output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer. */

var stringMatching = function (words) {
  let ans = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      let word = words[i];
      if (word.includes(words[j]) && i != j) {
        ans.push(words[j]);
      }
    }
  }
  return [...new Set(ans)];
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
console.log(stringMatching(["leetcode", "et", "code"]));
