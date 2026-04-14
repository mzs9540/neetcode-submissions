class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const count = {};
        for (let i = 0; i < nums.length; i++) {
            if (count[nums[i]] === undefined) {
                count[nums[i]] = i;
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (count[target - nums[i]] !== undefined) {
                return [count[target - nums[i]], i];
            }
        }
    }
}
