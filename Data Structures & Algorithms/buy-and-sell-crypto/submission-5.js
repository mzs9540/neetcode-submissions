class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let lPointer = 0;
        let rPointer = lPointer+1;
        let bestProfit = 0;
        while(rPointer < prices.length) {
            const lItem = prices[lPointer]
            const rItem = prices[rPointer]
            if(lItem>rItem) {
                lPointer = rPointer;
                rPointer++
            } else if(lItem<rItem) {
                const profit = rItem - lItem;
                if(bestProfit<profit) bestProfit = profit;
                rPointer++;
            } else {
                rPointer++;
            }
        }
        return bestProfit;
    }
}
