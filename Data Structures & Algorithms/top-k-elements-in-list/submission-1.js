class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            if(map.has(nums[i])){
                map.set(nums[i], map.get(nums[i]) + 1)
            } else {
                map.set(nums[i], 1)
            }
        }
        const sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1])
        const result = sorted.splice(0, k).map((val)=>val[0])
        return result;
    }
}
