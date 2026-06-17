class Solution {
    isAlphaNum(s) {
        return (s >= 'a' && s <= 'z') 
        || (s >= 'A' && s <= 'Z') 
        || (s >= '0' && s <= '9');
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while(l < r && !this.isAlphaNum(s[l])) {
                l++;
                console.log(1)
            }
            while(l < r && !this.isAlphaNum(s[r])) {
                r--;
                console.log(2)
            }
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            r--;
            l++;
        }
        return true;
    }
}
