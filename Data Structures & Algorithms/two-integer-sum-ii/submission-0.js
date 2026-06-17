class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        const mp = new Map();
        while (i < numbers.length) {
            const tmp = target - numbers[i];
            if (mp.has(tmp)) {
                return [mp.get(tmp), i + 1]
            }
            mp.set(numbers[i], i + 1);
            i+=1;
        }
        return [];
    }
}
