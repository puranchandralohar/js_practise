// Two Sum
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.
// You can return the answer in any order.


// var twoSum = function(nums, target) {
    
//     for(i = 0; i<nums.length; i++){
//         for( j=i+1;j<nums.length; j++){
//             if(nums[i]+nums[j] == target){
//                 return [i,j];
//             }
//         }       
//         }
    
// };

// console.log(twoSum([1,2,5,4,7,5],6));
// ********************************************************

// Given an array nums with n objects colored red, 
// white, or blue, sort them in-place so that objects 
// of the same color are adjacent, with the colors in 
// the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// var sortColors = function(nums) {
//     let temp;
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]>=nums[j]){
//             temp=nums[i];
//             nums[i]=nums[j];
//             nums[j]=temp;
//         } 
//         }
       
//     }
//     return nums;
// };
// console.log(sortColors([2,0,2,1,1,0]))