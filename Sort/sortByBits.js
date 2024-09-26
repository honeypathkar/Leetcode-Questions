/* 1356. Sort Integers by The Number of 1 Bits
Acceptance Rate: 78.3% */

/* Test Case:
input: arr = [0,1,2,3,4,5,6,7,8]
Ecpected output: [0,1,2,4,8,3,5,6,7]
Explantion: [0] is the only integer with 0 bits.
[1,2,4,8] all have 1 bit.
[3,5,6] have 2 bits.
[7] has 3 bits.
The sorted array by bits is [0,1,2,4,8,3,5,6,7] */

var sortByBits = function (arr) {
  return arr.sort(
    (a, b) =>
      a.toString(2).split("0").join("").length -
        b.toString(2).split("0").join("").length || a - b
  );
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
