/* 2396. Strictly Palindromic Number
Acceptance Rate: 88.0% */

/* Test Case:
input: n = 9
Expected output: false
Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
In base 3: 9 = 100 (base 3), which is not palindromic.
Therefore, 9 is not strictly palindromic so we return false.
Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic. */

var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    let comp = String(n.toString(i)).split("");
    if (comp.join("") !== comp.reverse().join("")) {
      return false;
    }
  }
  return true;
};

console.log(isStrictlyPalindromic(9));
console.log(isStrictlyPalindromic(4));
