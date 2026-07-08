class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === '') return;

        const countT = {};
        let window = {};

        for (const c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let need = Object.keys(countT).length,
            have = 0,
            l = 0,
            resLen = Infinity,
            res = [-1, -1];

        for (let r = 0; r < s.length; r++) {
            let c = s[r];

            window[c] = (window[c] || 0) + 1;

            if (countT[c] && countT[c] === window[c]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;

                if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
                    have--;
                }

                l++;
            }
        }

        return resLen === Infinity ? '' : s.slice(res[0], res[1] + 1);
    }
}
