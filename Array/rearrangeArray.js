/* 2149. Rearrange Array Elements by Sign
Acceptance Rate: 84.1% */

/* Test Case:
input: nums = [3,1,-2,-5,2,-4]
Expected output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect
because they do not satisfy one or more conditions.  */

var rearrangeArray = function (nums) {
  let res = [];
  let posIdx = 0,
    negIdx = 0;

  let positive = nums.filter((num) => num > 0);
  let negative = nums.filter((num) => num < 0);

  for (let i = 0; i < nums.length; i++) {
    res.push(i % 2 === 0 ? positive[posIdx++] : negative[negIdx++]);
  }

  return res;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([-1, 1]));
