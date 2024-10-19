/* 3271. Hash Divided String
Acceptance Rate: 86.4% */

/* Test Case:
input: s = "abcd", k = 2
Expected output: "bf"
Explanation:
First substring: "ab", 0 + 1 = 1, 1 % 26 = 1, result[0] = 'b'.
Second substring: "cd", 2 + 3 = 5, 5 % 26 = 5, result[1] = 'f'. */

/* Helper Function
Coverting char to index */
function charToIndex(char) {
  return char.charCodeAt(0) - "a".charCodeAt(0);
}

/* Helper Function
Converting index to char */
function indexToChar(index) {
  return String.fromCharCode((index % 26) + "a".charCodeAt(0));
}

var stringHash = function (s, k) {
  let result = "";

  for (let i = 0; i < s.length; i += k) {
    let substring = s.slice(i, i + k);
    let sum = [...substring].reduce((acc, char) => acc + charToIndex(char), 0);
    result += indexToChar(sum);
  }
  return result;
};

console.log(stringHash("abcd", 2));
console.log(stringHash("mxz", 2));
