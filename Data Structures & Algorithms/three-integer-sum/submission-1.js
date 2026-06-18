class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const len = nums.length;
        const res = [];

        for (let i = 0; i < len; i += 1) {
            const num = nums[i];
            if (num > 0) {
                break;
            }
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            let l = i + 1;
            let r = len - 1;
            while (l < r) {
                const sum = num + nums[l] + nums[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    res.push([nums[i], nums[l], nums[r]]);
                    r--;
                    l++;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return res;
    }
}
