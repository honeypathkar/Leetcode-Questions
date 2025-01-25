/* 2315. Count Asterisks
Acceptance Rate: 82.5% */

/* Test Case:
input: s = "l|*e*et|c**o|*de|"
Expected output: 2
Explanation: The considered characters are underlined: "l|*e*et|c**o|*de|".
The characters between the first and second '|' are excluded from the answer.
Also, the characters between the third and fourth '|' are excluded from the answer.
There are 2 asterisks considered. Therefore, we return 2. */

var countAsterisks = function (s) {
  let insidePipe = false;
  let count = 0;
  for (let char of s) {
    if (char === "|") {
      insidePipe = !insidePipe;
    } else if (char === "*" && !insidePipe) {
      count++;
    }
  }
  return count;
};

console.log(countAsterisks("l|*e*et|c**o|*de|"));
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
