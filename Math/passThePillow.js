/* 2582. Pass the Pillow
Accepatance Rate: 56.9% */

/* Test Case:
input: n = 4, time = 5
Expected output: 2
Explanation: People pass the pillow in the following way: 1 -> 2 -> 3 -> 4 -> 3 -> 2.
After five seconds, the 2nd person is holding the pillow. */

var passThePillow = function (n, time) {
  let ans = parseInt(time / (n - 1));
  return ans % 2 === 0 ? (time % (n - 1)) + 1 : n - (time % (n - 1));
};

console.log(passThePillow(4, 5));
console.log(passThePillow(3, 2));
