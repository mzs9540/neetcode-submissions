class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const seen = new Set();
        let count = 0;
        let l = 0;
        let r = 0;

        while (r < s.length) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l++;
            }
            count = Math.max(count, r - l + 1);
            seen.add(s[r]);
            r++;
        }
        
        return count;
    }
}
