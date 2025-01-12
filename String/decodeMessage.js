/* 2325. Decode The Message 
Acceptance Rate: 85.0% */

/* Test Case:
input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Expected output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog". */

var decodeMessage = function (key, message) {
  let keyOfMsg = [...new Set(key.split("").filter((item) => item != " "))];
  let keyMapping = {};
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < keyOfMsg.length; i++) {
    keyMapping[keyOfMsg[i]] = alphabet[i];
  }

  let decodeMsg = message
    .split("")
    .map((char) => {
      if (char == " ") {
        return " ";
      } else {
        return keyMapping[char];
      }
    })
    .join("");

  return decodeMsg;
};

console.log(
  decodeMessage(
    "the quick brown fox jumps over the lazy dog",
    "vkbs bs t suepuv"
  )
);
console.log(
  decodeMessage(
    "eljuxhpwnyrdgtqkviszcfmabo",
    "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
  )
);
