/* 1768. Merge Strings Alternately
Acceptance Rate: 81.0% */

/* Test Case:
input: word1 = "abc", word2 = "pqr"
Expected output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r */

var mergeAlterNately = function (word1, word2) {
  let result = "";
  let n1 = word1.length;
  let n2 = word2.length;
  let n = Math.min(n1, n2);

  for (let i = 0; i < n; i++) {
    result += word1[i] + word2[i];
  }

  if (n1 === n2) {
    return result;
  } else if (n1 > n2) {
    return result + word1.slice(n);
  } else {
    return result + word2.slice(n);
  }
};

console.log(mergeAlterNately("abc", "pqr"));
console.log(mergeAlterNately("hn", "oey"));
