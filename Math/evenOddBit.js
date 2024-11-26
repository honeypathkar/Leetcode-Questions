/* 2595. Number of Even and Odd Bits
Acceptance Rate: 72.8% */

/* Test Case:
input: n = 50
Expectedoutput: [1,2]
Explanation:
The binary representation of 50 is 110010.
It contains 1 on indices 1, 4, and 5. */

var evenOddBit = function (n) {
  let bit = n.toString(2).split("").reverse().map(Number);
  let evenCount = 0;
  let oddCount = 0;
  for (let i = 0; i < bit.length; i++) {
    if (bit[i] === 1 && i % 2 == 0) {
      evenCount++;
    } else if (bit[i] === 1 && i % 2 !== 0) {
      oddCount++;
    }
  }
  return [evenCount, oddCount];
};

console.log(evenOddBit(50));
console.log(evenOddBit(2));
