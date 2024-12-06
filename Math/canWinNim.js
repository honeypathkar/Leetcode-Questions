/* 292. Nim Game
Acceptance Rate: 57.5% */

/* Test Case:
input: n = 4
Expected output: false
Explanation: These are the possible outcomes:
1. You remove 1 stone. Your friend removes 3 stones, including the last stone. Your friend wins.
2. You remove 2 stones. Your friend removes 2 stones, including the last stone. Your friend wins.
3. You remove 3 stones. Your friend removes the last stone. Your friend wins.
In all outcomes, your friend wins. */

var canWinNim = function (n) {
  return n % 4 != 0;
};

console.log(canWinNim(4));
console.log(canWinNim(5));
