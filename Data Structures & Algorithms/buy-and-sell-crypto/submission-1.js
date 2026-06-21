class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        const len = prices.length;
        let res = 0;
         while (l < len && r < len) {
            const pR = prices[r];
            const pL = prices[l];
            res = Math.max(res, pR - pL);
            if (pL > pR) {
                l = r
            };
            r++;
         }

         return res;
    }
}
