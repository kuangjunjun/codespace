/**
 * @param {string} s ((()))
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = ''; // 存储最终的结果
    let opened = 0; // 用于跟踪已打开的括号数量

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (opened > 0) {
                result += s[i]; // 添加非最外层的左括号
            }
            opened++;
        } else if (s[i] === ')') {
            opened--;
            if (opened > 0) {
                result += s[i]; // 添加非最外层的右括号
            }
        }
    }

    return result;
};
