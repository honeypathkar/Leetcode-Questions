/* 389. Find the Difference
Acceptance Rate: 59.6% */

/* Test case:
input: s = "abcd", t = "abcde"
Expected output: "e"
Explanation: 'e' is the letter that was added. */

var findTheDifference = function (s, t) {
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  if (str1 === "") {
    return str2;
  } else {
    for (let i = 0; i < str2.length; i++) {
      if (str2[i] !== str1[i]) {
        return str2[i];
      }
    }
  }
};

console.log(findTheDifference("abcd", "abcde")); //e
console.log(findTheDifference("", "y")); //y
