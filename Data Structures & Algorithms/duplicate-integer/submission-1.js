class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasNum = {}
        let hasDup = false;
        for (let c of nums) {
            if (hasNum[c]) {
                return true
            }
            hasNum[c] = 1;
        }

        return hasDup;
    }
}
