class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = position.map((p, i) => [p, speed[i]]).sort((a, b) => b[0] - a[0]);
        const stack = [];
        for (const p of pair) {
            const t = (target - p[0])/p[1];
            stack.push(t);
            const l = stack.length;
            if (l > 1 && stack[l - 1] <= stack[l - 2]) {
                stack.pop();
            }
        }
        return stack.length;
    }
}
