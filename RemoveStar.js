/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
            if (stack) {
                stack.pop(s[i]); 
            }
        } else {
            stack.push(s[i]); 
        }
    }

    return stack.join('');
};
