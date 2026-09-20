class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     * ["1","2","+","3","*","4","-"]
     */
    evalRPN(tokens) {
        const dfs = () => {
            const token = tokens.pop();

            if (!"+-*/".includes(token)) {
                return parseInt(token);
            }

            const right = dfs();
            const left = dfs();

            switch (token) {
                case "+": {
                    return right + left;
                }
                case "-": {
                    return left - right;
                }
                case "/": {
                    return Math.trunc(left / right);
                }
                case "*": {
                    return right * left;
                }
                default: {
                    return "";
                }
            }
        };

        return dfs();
    }
}
