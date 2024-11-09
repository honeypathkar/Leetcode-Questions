/* 771. Jewels and Stones
Acceptance Rate: 88.9% */

/* Test Case:
input: jewels = "aA", stones = "aAAbbbb"
Expected output: 3 */

var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < jewels.length; i++) {
    for (let j = 0; j < stones.length; j++) {
      if (jewels[i] == stones[j]) {
        count++;
      }
    }
  }
  return count;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));
console.log(numJewelsInStones("z", "ZZ"));
