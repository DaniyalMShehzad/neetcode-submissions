class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const maps = new Map();
        for (let i = 0; i < nums.length; i++) {
            if(maps.has(target - nums[i])){
                return [maps.get(target - nums[i]), i]
            }
            maps.set(nums[i], i)
        }
    }
}
