/*
Given a string s containing just the characters '(', ')', '{', '}', 
'[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

// https://leetcode.com/problems/valid-parentheses/

var isValid = function (s) {
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);
  let stack = [];
  for (let char of s) {
    if (map.has(char)) {
      stack.push(char);
    } else {
      if (map.get(stack.pop()) !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
