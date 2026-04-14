class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hasNum = {}
        let hasDup = false;
        for (let c of nums) {
            console.log(c, hasNum[c]);
            if (hasNum[c]) {
                return true
            }
            hasNum[c] = 1;
        }
        console.log('hasDup', hasDup)

        return hasDup;
    }
}
