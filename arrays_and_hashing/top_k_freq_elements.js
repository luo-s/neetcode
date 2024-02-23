/*
Given an integer array nums and an integer k, return the k most frequent 
elements. You may return the answer in any order.

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
*/

// sorting + hash
var topKFrequent = function (nums, k) {
  // create a map to store the frequency of each number
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // sort the map by frequency DESC
  let sorted = [...map].sort((a, b) => b[1] - a[1]);
  // return the first k elements
  return sorted.slice(0, k).map((el) => el[0]);
};
