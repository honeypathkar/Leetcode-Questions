/* 1720. Decode XORed Array
Acceptance Rate: 86.7% */

/* Test Case:
input: encoded = [1,2,3], first = 1
Expected output: [1,0,2,1]
Explanation: If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3] */

var decode = function (encoded, first) {
  var decode = [first];
  for (let i = 0; i < encoded.length; i++) {
    decode[i + 1] = encoded[i] ^ decode[i];
  }
  return decode;
};

console.log(decode([1, 2, 3], 1));
console.log(decode([6, 2, 7, 3], 4));
