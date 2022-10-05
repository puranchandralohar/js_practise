// Q.No-1512

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.


 const numIdenticalPairs = function(nums) {
    let goodpair=0;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                goodpair++;
            }
        }
    }
    return goodpair;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]))
