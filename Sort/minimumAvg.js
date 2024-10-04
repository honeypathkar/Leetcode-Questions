/* 3194. Minimum Average of Smallest and Largest Elements
Acceptamce Rate: 85.4% */

/* Test Case:
input: nums = [7,8,3,4,15,13,4,1]
Expected output: 5.5
Explanation:
step	 nums	          averages
0	 [7,8,3,4,15,13,4,1]	[]
1	 [7,8,3,4,13,4]	       [8]
2	 [7,8,4,4]	         [8,8]
3	 [7,4]	           [8,8,6]
4	 []	             [8,8,6,5.5]
The smallest element of averages, 5.5, is returned. */

var minimumAverage = function (nums) {
  let arr = [];
  nums.sort((a, b) => a - b);
  while (nums.length > 0) {
    let min = nums[0];
    let max = nums[nums.length - 1];
    nums.splice(nums.indexOf(min), 1);
    nums.splice(nums.indexOf(max), 1);
    let avg = (min + max) / 2;
    arr.push(avg);
  }
  return Math.min(...arr);
};

console.log(minimumAverage([7, 8, 3, 4, 15, 13, 4, 1]));
console.log(minimumAverage([1, 2, 3, 7, 8, 9]));
