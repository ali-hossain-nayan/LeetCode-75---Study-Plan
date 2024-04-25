/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let searchLimit = haystack.length - needle.length;
    if (needle.length === 0) {
        return 0
    }

    for (let i = 0; i <= searchLimit; i++) {
        let flag = true;
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] !== needle[j]) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return i
            }
        }
    }
    return -1;
};