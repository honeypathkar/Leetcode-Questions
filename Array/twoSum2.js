/* 167. Two Sum II - Input Array Is Sorted
Acceptance Rate: 62.2% */

/* Test Case:
input: numbers = [2,7,11,15], target = 9
Expected output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2]. */

var twoSum = function (numbers, target) {
  let v1 = 0;
  let v2 = numbers.length - 1;

  while (numbers[v1] + numbers[v2] !== target) {
    if (numbers[v1] + numbers[v2] > target) {
      v2--;
    } else {
      v1++;
    }
  }
  return [v1 + 1, v2 + 1];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
