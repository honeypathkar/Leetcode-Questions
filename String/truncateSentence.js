/* 1816. Truncate Sentence
Acceptance Rate: 85.7% */

/* Test Case:
input: s = "Hello how are you Contestant", k = 4
Expected output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you". */

var truncateSentence = function (s, k) {
  let str = s.split(" ");
  let trunc = "";
  for (let i = 0; i < k; i++) {
    trunc += str[i];
    if (i < k - 1) {
      trunc += " ";
    }
  }
  return trunc;
};

console.log(truncateSentence("Hello how are you constent", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
