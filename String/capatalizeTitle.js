/* 2129. Capatalize The Title 
Acceptance Rate: 65.0% */

/* Test Case : 
input: title = "First leTTeR of EACH Word"
Expected output: "First Letter of Each Word"
Explanation:
The word "of" has length 2, so it is all lowercase.
The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase,
and the remaining letters are lowercase. */

var capatlizeTitle = function (title) {
  let str = title
    .split(" ")
    .map((word) =>
      word.length <= 2
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(" ");
  return str;
};

console.log(capatlizeTitle("First leTTeR of EACH Word"));
console.log(capatlizeTitle("i lOve leetcode"));
