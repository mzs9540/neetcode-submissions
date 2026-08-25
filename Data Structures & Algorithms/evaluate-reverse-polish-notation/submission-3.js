class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const t of tokens) {
            switch(t) {
                case '+': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(Number(num1) + Number(num2));
                    break;
                };
                case '-': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(Number(num2) - Number(num1));
                    break;
                };
                case '*': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(Number(num1) * Number(num2));
                    break;
                };
                case '/': {
                    const num1 = stack.pop();
                    const num2 = stack.pop();
                    stack.push(Math.trunc(Number(num2) / Number(num1)));
                    break;
                }
                default : {
                    stack.push(t);
                }
            }
        }
        return stack[0];
    }
}
