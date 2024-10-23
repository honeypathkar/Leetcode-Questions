/* 1103. Distribute Candies to People
Acceptance Rate: 65.7% */

/* Test Case;
input: candies = 7, num_people = 4
Expected output: [1,2,3,1]
Explanation:
On the first turn, ans[0] += 1, and the array is [1,0,0,0].
On the second turn, ans[1] += 2, and the array is [1,2,0,0].
On the third turn, ans[2] += 3, and the array is [1,2,3,0].
On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1]. */

var distributeCandies = function (candies, num_people) {
  let result = new Array(num_people).fill(0);
  let i = 0;
  while (candies > 0) {
    result[i % num_people] += Math.min(candies, i + 1);
    candies -= i + 1;
    i++;
  }

  return result;
};

console.log(distributeCandies(7, 4));
console.log(distributeCandies(10, 3));
