/* 1387. Sort Integers by The Power Values 
Acceptance Rate: 70.2% */

/* Test Case:
input: lo = 12, hi = 15, k = 2
Expected output: 13
Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
The power of 13 is 9
The power of 14 is 17
The power of 15 is 17
The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15. */

var getKth = function (lo, hi, k) {
  const result = [];
  const counts = [];

  for (let n = lo; n <= hi; n++) {
    let count = 0;
    let current = n;

    while (current > 1) {
      if (current % 2 === 0) {
        current = current / 2;
      } else {
        current = 3 * current + 1;
      }
      count++;
    }

    result.push(n);
    counts.push(count);
  }

  let combined = result.map((value, index) => ({ value, index }));
  let sortArray = combined.sort((a, b) => counts[a.index] - counts[b.index]);

  let ans = sortArray.map((item) => item.value);
  return ans[k - 1];
};

console.log(getKth(12, 15, 2));
console.log(getKth(7, 11, 4));
