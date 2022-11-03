// Q.No-1

// Given an integer array nums of length n, 
// you want to create an array ans of length 2n 
// where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
    let getConcatenation = function(nums) {
        let n= nums.length;
        let length = n * 2;
        let ans=[];
        
        for(let i=0; i<nums.length;i++){
            ans[i]=nums[i]
            ans[i+n] = nums[i]
            
        }
        return ans
    };

    console.log(getConcatenation([1,2,1]))
