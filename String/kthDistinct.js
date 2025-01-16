/* 2053. Kth Distinct String in an Array
Acceptance Rate: 82.0% */

/* Test Case:
input: arr = ["d","b","c","b","c","a"], k = 2
Expected output: "a"
Explanation:
The only distinct strings in arr are "d" and "a".
"d" appears 1st, so it is the 1st distinct string.
"a" appears 2nd, so it is the 2nd distinct string.
Since k == 2, "a" is returned.  */

var kthDistinct = function (arr, k) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count == 1) {
      ans.push(arr[i]);
    }
  }
  return ans.length < k ? "" : ans[k - 1];
};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2));
console.log(kthDistinct(["a", "b", "a"], 3));
