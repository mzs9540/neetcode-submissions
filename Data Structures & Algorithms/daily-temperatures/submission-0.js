class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = [];
        const tempCopy = [...temperatures];

        while (tempCopy.length > 0) {
            const temp = tempCopy.pop();
            const index = tempCopy.length;

            while (
                stack.length > 0 &&
                temperatures[stack[stack.length - 1]] <= temp
            ) {
                stack.pop();
            }

            const days =
                stack.length === 0
                    ? 0
                    : stack[stack.length - 1] - index;

            res.push(days);
            stack.push(index);
        }

        return res.reverse();
    }
}