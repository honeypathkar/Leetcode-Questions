/* 1528. Shuffle String
Acceptance Rate: 84.9% */

/* Test Case:
input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Expected output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling. */

var restoreString = function (s, indices) {
  let str = s.split("");
  let combine = str.map((value, index) => ({
    value,
    sortValue: indices[index],
  }));
  combine.sort((a, b) => a.sortValue - b.sortValue);
  let result = combine.map((item) => item.value);
  return result.join("");
};

console.log(restoreString("codeleet", [4, 5, 6, 7, 0, 1, 2, 3, 4]));
console.log(restoreString("onehy", [1, 2, 3, 0, 4]));
