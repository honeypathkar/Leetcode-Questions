/* 2418. Sort the People
Acceptance Rate: 85.0% */

/* Test Case:
Input: names = ["Mary","John","Emma"], heights = [180,165,170]
Output: ["Mary","Emma","John"]
Explanation: Mary is the tallest, followed by Emma and John. */

var sortPeople = function (names, heights) {
  let combinedArr = names.map((value, index) => ({
    value,
    sortValue: heights[index],
  }));
  combinedArr.sort((a, b) => b.sortValue - a.sortValue);
  let result = combinedArr.map((item) => item.value);
  return result;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));
