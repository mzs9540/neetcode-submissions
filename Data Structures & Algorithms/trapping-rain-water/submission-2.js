class Solution {
    /**
     * h1 = 3, h2 = 2, l = 7, r = 9;
     * res = 5;
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let h1 = height[0];
        let h2 = height[height.length - 1];
        let l = 0;
        let r = height.length - 1;
        let res = 0;

        while (l < r) {
            if (height[l] <= height[r]) {
                const area = Math.min(h1, h2) - height[l];
                if (area > 0) {
                    res += area;
                }
                l++;
                h1 = Math.max(h1, height[l]);
            } else {
                const area = Math.min(h1, h2) - height[r];
                if (area > 0) {
                    res += area;
                }
                r--;
                h2 = Math.max(h2, height[r]);
            }
        }

        return res;
    }
}
