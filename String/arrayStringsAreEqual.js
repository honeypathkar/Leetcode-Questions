/* 1662. Check If Two String Arrays are Equivalent
Acceptance Rate: 85.6% */

/* Test Case:
input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Expected output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true. */

var arrayStringAreEqual = function (word1, word2) {
  let string1 = word1.join("");
  let string2 = word2.join("");
  if (string1 == string2) {
    return true;
  }
  return false;
};

console.log(arrayStringAreEqual(["a", "bc"], ["ab", "c"]));
console.log(arrayStringAreEqual(["a", "cb"], ["ab", "c"]));
