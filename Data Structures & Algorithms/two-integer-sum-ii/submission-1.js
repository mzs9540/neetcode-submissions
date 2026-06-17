class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;
        while (l < r) {
            const sum = numbers[l] + numbers[r];
            if (sum === target) {
                return [l+1, r+1];
            }
            while (l < r && (numbers[l] + numbers[r]) > target) {
                r--;
            }
            while (l < r && (numbers[l] + numbers[r]) < target) {
                l++;
            }
        }
    }
}
