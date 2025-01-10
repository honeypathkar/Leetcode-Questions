/* 2828. Check if a String Is an Acronym of Words
Acceptance Rate: 82.9% */

/* Test Case:
Input: words = ["alice","bob","charlie"], s = "abc"
Output: true
Explanation: The first character in the words "alice", "bob", and "charlie" are 'a', 'b', and 'c', respectively. Hence, s = "abc" is the acronym.  */

var isAcronym = function (words, s) {
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1);
  }
  return words.join("") === s;
};

console.log(isAcronym(["alice", "bob", "charlie"], "abc"));
console.log(isAcronym(["an", "apple"], "a"));
