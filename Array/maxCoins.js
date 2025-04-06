/* 1561. Maximum Number of Coins You Can Get
Acceptance Rate: 84.4% */

/* Test Case:
input: piles = [2,4,1,2,7,8]
Expected output: 9
Explanation: Choose the triplet (2, 7, 8), Alice Pick the pile with 8 coins, you the pile with 7 coins and Bob the last one.
Choose the triplet (1, 2, 4), Alice Pick the pile with 4 coins, you the pile with 2 coins and Bob the last one.
The maximum number of coins which you can have are: 7 + 2 = 9.
On the other hand if we choose this arrangement (1, 2, 8), (2, 4, 7) you only get 2 + 4 = 6 coins which is not optimal.
*/

var maxCoins = function (piles) {
  let total = 0;
  piles.sort((a, b) => a - b);

  let i = 0,
    j = piles.length - 2;
  while (i < j) {
    total += piles[j];
    j -= 2;
    i++;
  }

  return total;
};
