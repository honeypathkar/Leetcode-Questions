/* 2114. Maximum Number of Words Found in Sentences
Acceptance Rate: 86.6% */

/* Test Case:
input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
Expected output: 6
Explanation: 
- The first sentence, "alice and bob love leetcode", has 5 words in total.
- The second sentence, "i think so too", has 4 words in total.
- The third sentence, "this is great thanks very much", has 6 words in total.
Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words. */

var mostWordsFound = function (sentences) {
  const countWords = (str) =>
    str.split(/\s+/).filter((word) => word !== "").length;
  const arr = sentences.map((str) => countWords(str));
  return Math.max(...arr);
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
console.log(
  mostWordsFound(["please wait", "continue to fight", "continue to win"])
);
