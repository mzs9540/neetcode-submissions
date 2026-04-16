class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const sizes = [];
        for (const s of strs) {
            sizes.push(s.length)
        }
        
        return sizes.join(',') + '#' + strs.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === '#') {
            return [];
        }
        const strs = [];
        let startIndex = -1;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '#') {
                startIndex = i + 1;
                break;
            }
        }
        const sizes = str.slice(0, startIndex - 1).split(',');
        for (const s of sizes) {
            strs.push(str.slice(startIndex, startIndex + parseInt(s)))
            startIndex += parseInt(s);
        }

        return strs;
    }
}
