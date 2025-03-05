/* 3461. Check If Digits Are Equal in String After Operations I
Acceptance Rate: 79.8% */

/* Test Case:
input: s = "3902"
Expected output: true
Explanation:
Initially, s = "3902"
First operation:
 - (s[0] + s[1]) % 10 = (3 + 9) % 10 = 2
 - (s[1] + s[2]) % 10 = (9 + 0) % 10 = 9
 - (s[2] + s[3]) % 10 = (0 + 2) % 10 = 2
 - s becomes "292"
Second operation:
 - (s[0] + s[1]) % 10 = (2 + 9) % 10 = 1
 - (s[1] + s[2]) % 10 = (9 + 2) % 10 = 1
 - s becomes "11"
Since the digits in "11" are the same, the output is true. */

var hasSameDigits = function (s) {
  while (s.length > 2) {
    let num = s.split("").map(Number);
    s = "";
    for (let i = 0; i < num.length - 1; i++) {
      s += (num[i] + num[i + 1]) % 10;
    }
  }
  return s.length === 2 && s[0] == s[1];
};

console.log(hasSameDigits("3902"));
console.log(hasSameDigits("34789"));
