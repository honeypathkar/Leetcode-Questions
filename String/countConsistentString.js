/* 1684. Count the Number of Consistent Strings
Acceptance Rate: 88.1% */

/* Test Case:
input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Expected utput: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'. */

var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let word of words) {
    let isInclude = true;
    for (let char of word) {
      if (!allowed.includes(char)) {
        isInclude = false;
        break;
      }
    }
    if (isInclude) {
      count++;
    }
  }
  return count;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(
  countConsistentStrings("cad", [
    "cc",
    "acd",
    "b",
    "ba",
    "bac",
    "bad",
    "ac",
    "d",
  ])
);
