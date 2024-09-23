/* 2433. Find The Original Array of Prefix XOR 
Acceptance Rate: 88.0% */

/* Test Case:
input: pref = [5,2,0,3,1]
Expected output: [5,7,2,3,2]
Explanation: From the array [5,7,2,3,2] we have the following:
- pref[0] = 5.
- pref[1] = 5 ^ 7 = 2.
- pref[2] = 5 ^ 7 ^ 2 = 0.
- pref[3] = 5 ^ 7 ^ 2 ^ 3 = 3.
- pref[4] = 5 ^ 7 ^ 2 ^ 3 ^ 2 = 1. */

var findArray = function (pref) {
  let ans = [];
  ans[0] = pref[0];
  for (let i = 0; i < pref.length - 1; i++) {
    ans[i + 1] = pref[i] ^ pref[i + 1];
  }
  return ans;
};

console.log(findArray([5, 2, 0, 3, 1]));
console.log(findArray([13, 10, 4]));
