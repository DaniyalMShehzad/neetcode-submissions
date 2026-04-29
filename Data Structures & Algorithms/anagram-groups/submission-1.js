class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (let i = 0; i < strs.length; i++) {
            const sortedStrs = strs[i].split("").sort().join("");
            if (map.has(sortedStrs)) {
                map.get(sortedStrs).push(strs[i]);
            } else {
                map.set(sortedStrs, [strs[i]]);
            }
        }
        const result = Array.from(map.values())
        return result;
    }
}
