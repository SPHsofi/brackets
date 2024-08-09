module.exports = function check(str, bracketsConfig) {
    const map = new Map(bracketsConfig);
    const stack = [];
    for(let char of str) {
        if (map.has(char)) {
            if (map.get(char) === char && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else {
            for (let [open, close] of bracketsConfig) {
                if (char === close) {
                    if (stack.length === 0 || stack[stack.length - 1] !== open) {
                        return false;
                    }
                    stack.pop();
                }
            }
        }
    }
    return stack.length === 0;
}
