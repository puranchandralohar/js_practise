// 2089. Find Target Indices After Sorting Array

// You are given a 0-indexed integer array nums and a target element target.
// A target index is an index i such that nums[i] == target.
// Return a list of the target indices of nums after sorting nums in non-decreasing order.
// If there are no target indices, return an empty list.
// The returned list must be sorted in increasing order.

// Example 1:
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.

var targetIndices = function (nums, target) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  for (let k = 0; k < nums.length; k++) {
    if (nums[k] === target) {
      arr.push(k);
    }
  }
  return arr;
};

console.log(targetIndices([1,2,5,2,3],2))
