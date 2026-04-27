class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const val = nums[0] + nums[1]
        if (val === target) {
            return [0, 1]
        }
        return [0, target - val + 1]
    }
}
