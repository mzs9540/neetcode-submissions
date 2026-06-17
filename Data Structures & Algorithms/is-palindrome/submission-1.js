class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (!s?.length) {
            return false;
        }
        if (s.length === 1) {
            return true;
        }
        const cleanStr = s.replace(/[^a-zA-Z0-9]/g, "")
        let sArr = [];
        for (const c of cleanStr) {
            if (c !== ' ') {
                sArr.push(c);
            }
        }
        console.log('arr', sArr);
        const mid = Math.floor(sArr.length / 2);
        for (let i = 0; i < mid; i += 1) {
            const end = sArr.length - i - 1;
            if (i > end) {
                return true;
            }
            if (sArr[i].toLowerCase() !== sArr[end].toLowerCase()) {
                return false;
            }
        }
        return true;
    }
}
