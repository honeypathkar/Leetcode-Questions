/* 1859. Sorting the Sentence
Acceptance Rate: 83.4% */

/* Test Case:
input: s = "is2 sentence4 This1 a3"
Expected output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers. */

var sortSentence = function (s) {
  let words = s.split(" ");
  words.sort((a, b) => {
    return a[a.length - 1] - b[b.length - 1];
  });
  return words.map((word) => word.slice(0, -1)).join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"));
console.log(sortSentence("Myself2 Me1 I4 and3"));
