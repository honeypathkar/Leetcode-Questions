/* 1678. Goal Parser Interpretation
Acceptance Rate: 87.4% */

/* Test Case:
input: command = "G()(al)"
Expected output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal". */

var interpret = function (command) {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
};

console.log(interpret("G()(al)"));
console.log(interpret("G()()()()(al)"));
