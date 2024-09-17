/* 2220. Minimum Bit Flips to Convert Number
Acceptance Rate: 87.5% */

/* Test Case:
input: start = 10, goal = 7
Ecpected output: 3
Explanation: The binary representation of 10 and 7 are 1010 and 0111 respectively. We can convert 10 to 7 in 3 steps:
- Flip the first bit from the right: 1010 -> 1011.
- Flip the third bit from the right: 1011 -> 1111.
- Flip the fourth bit from the right: 1111 -> 0111.
It can be shown we cannot convert 10 to 7 in less than 3 steps. Hence, we return 3. */

var minBitFlips = function (start, goal) {
  let st = start.toString(2);
  let go = goal.toString(2);
  let flipCount = 0;

  if (st.length > go.length) {
    go = go.padStart(st.length, "0");
  } else if (go.length > st.length) {
    st = st.padStart(go.length, "0");
  }

  for (let i = 0; i < st.length; i++) {
    if (st[i] !== go[i]) {
      flipCount++;
    }
  }
  return flipCount;
};

console.log(minBitFlips(10, 7));
console.log(minBitFlips(12, 4));
