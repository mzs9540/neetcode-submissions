class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lPointer = 0;
        let rPointer = 1;
        let bestProfit = 0;
        while (rPointer < prices.length) {
            const rItem = prices[rPointer];
            const lItem = prices[lPointer];
            if (lItem > rItem) {
                lPointer = rPointer;
            } else if (lItem < rItem) {
                const profit = rItem - lItem;
                if (profit > bestProfit) bestProfit = profit;
            }
            rPointer++;
        }

        return bestProfit;
    }
}
