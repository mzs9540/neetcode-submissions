class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;
        let res = 0;
         while (r < prices.length) {
            const pR = prices[r];
            const pL = prices[l];
            if (pL > pR) {
                l = r;
                r++;
            } else if (pL < pR) {
                const profit = pR - pL;
                if (profit > res) res = profit;
                r++
            } else {
                r++;
            };
         }

         return res;
    }
}
