/* 1021. Remove Outermost Parentheses
Acceptance Rate: 84.4% */

/* Test Case:
input: s = "(()())(())"
Expected output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()". */

var removeOuterParenthess = function (s) {
  let ans = "";
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (cnt == 0 && s[i] == "(") {
      cnt++;
    } else if (s[i] == "(") {
      cnt++;
      ans += s[i];
    } else if (cnt == 1 && s[i] == ")") {
      cnt--;
    } else {
      cnt--;
      ans += s[i];
    }
  }
  return ans;
};

console.log(removeOuterParenthess("(()())(())"));
console.log(removeOuterParenthess("()()"));
