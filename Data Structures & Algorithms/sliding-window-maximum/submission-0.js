class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const leftM = new Array(n);
        const rightM = new Array(n);

        leftM[0] = nums[0];
        rightM[n - 1] = nums[n - 1];

        for (let i = 1; i < n; i++) {
            if (i % k === 0) {
                leftM[i] = nums[i];
            } else {
                leftM[i] = Math.max(leftM[i - 1], nums[i]);
            }

            if ((n - 1 - i) % k === 0) {
                rightM[n - i - 1] = nums[n - 1 - i]
            } else {
                rightM[n - i - 1] = Math.max(rightM[n - i], nums[n - 1 - i]);
            }
        }

        const output = new Array(n - k + 1);

        for (let i = 0; i < n - k + 1; i++) {
            output[i] = Math.max(rightM[i], leftM[i + k - 1]);
        }

        return output;
    }
}
