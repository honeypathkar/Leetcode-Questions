/* 2810. Faulty Keyboard
Acceptance Rate: 83.6% */

/* Test Case:
input: s = "string"
Expected output: "rtsng"
Explanation: 
After typing first character, the text on the screen is "s".
After the second character, the text is "st". 
After the third character, the text is "str".
Since the fourth character is an 'i', the text gets reversed and becomes "rts".
After the fifth character, the text is "rtsn". 
After the sixth character, the text is "rtsng". 
Therefore, we return "rtsng". */

var finalString = function (s) {
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    ans += s[i];
    if (s[i] == "i") {
      ans = ans
        .split("")
        .reverse()
        .filter((item) => item != "i")
        .join("");
    }
  }
  return ans;
};

console.log(finalString("string"));
console.log(finalString("poiinter"));
