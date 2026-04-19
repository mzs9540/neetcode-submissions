class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let isZero = false;
        let isManyZero = false;
        let product = undefined;

        nums.forEach((num) => {
            if (num !== 0) {
                product = (product || 1) * num;
            }
            if (num === 0 && !isZero) {
                isZero = true;
            } else if (num === 0 && isZero) {
                isManyZero = true;
            }
        });

        if (isManyZero) {
            return nums.map(() => 0);
        }

        if (isZero) {
            return nums.map((num) => num === 0 ? product : 0)
        }

        return nums.map((num) => product / num);
    }
}
