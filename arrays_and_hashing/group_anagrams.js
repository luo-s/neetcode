/*
Given an array of strings strs, group the anagrams together. 
You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a 
different word or phrase, typically using all the original letters exactly 
once.

1 <= strs.length <= 10^4
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
*/

// https://leetcode.com/problems/group-anagrams/

// sorting + hash
// time complexity O(nlogn)
// space complexity O(n)
var groupAnagrams = function (strs) {
  if (strs.length <= 1) return [strs];
  let map = new Map();
  for (let str of strs) {
    const strSort = str.split("").sort().join("");
    if (!map.has(strSort)) {
      map.set(strSort, [str]);
    } else {
      map.get(strSort).push(str);
    }
  }
  return Array.from(map.values());
};

// primes hashing
var groupAnagrams = function (strs) {
  // use 26 primes to represent each lowercase letter
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71, 73,
    79, 83, 89, 97, 101, 103,
  ];
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let h = 1;
    for (let j = 0; j < strs[i].length; j++)
      h *= primes[strs[i][j].charCodeAt(0) - "a".charCodeAt(0)];
    // map.set(h, (map.get(h) || []).concat(strs[i]))
    if (map.has(h)) map.get(h).push(strs[i]);
    else map.set(h, [strs[i]]);
  }
  return [...map.values()];
};
