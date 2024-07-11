/* 2716. Minimize String Length
Acceptance Rate: 75.8% */

/* Test case: 
input: "aaabc"
Expected output: 3
Explanation: 
1. 2. Operation 2: we choose i = 1 so c is 'a', then we remove s[2] as it is closest 'a' character to the right of s[1].
s becomes "aabc" after this.
Operation 1: we choose i = 1 so c is 'a', then we remove s[0] as it is closest 'a' character to the left of s[1].
s becomes "abc" after this. */

var minimizedStringLength = function (s) {
  let arr = s.split("");
  let strArr = [...new Set(arr)];
  return strArr.length;
};

console.log(minimizedStringLength("aaabc")); //3
console.log(minimizedStringLength("baadccab")); //4
