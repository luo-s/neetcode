/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

3 <= nums.length <= 3000
-10^5 <= nums[i] <= 10^5
*/

// https://leetcode.com/problems/3sum/

// brute force  -- time limit exceeded
// time complexity: O(n^3)
// space complexity: O(n)
var threeSum = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let arr = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
          set.add(arr.join(","));
        }
      }
    }
  }
  return [...set].map((ele) => ele.split(",").map((ele) => parseInt(ele)));
};

// sort + two pointers
// time complexity: O(n^2)
// space complexity: O(n)
var threeSum = function (nums) {
  // corner case
  if (nums.length < 3) return [];
  // sort the array
  nums.sort((a, b) => a - b);
  let res = [];
  for (let first = 0; first < nums.length - 2; first++) {
    // skip the duplicate
    if (first > 0 && nums[first] === nums[first - 1]) continue;
    // set two pointers
    let second = first + 1;
    let third = nums.length - 1;
    while (second < third) {
      let sum = nums[first] + nums[second] + nums[third];
      if (sum < 0) {
        second++;
      } else if (sum > 0) {
        third--;
      } else {
        res.push([nums[first], nums[second], nums[third]]);
        // skip the duplicate
        while (second < third && nums[second] === nums[second + 1]) second++;
        while (second < third && nums[third] === nums[third - 1]) third--;
        second++;
        third--;
      }
    }
  }
  return res;
};
