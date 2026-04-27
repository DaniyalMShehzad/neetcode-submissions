class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let bool = false;
        const set = new Set();
        for(let val of nums){
            if(set.has(val)) {
                bool = true;
                return true;
            }
            set.add(val);
        }
        return bool;
    }
}
