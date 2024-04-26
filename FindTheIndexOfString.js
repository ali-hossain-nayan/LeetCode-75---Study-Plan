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








const FindIndex = (mainstring, substring) => {
    let m = mainstring.length
    let n = substring.length
    let limit = m - n;
    for (let i = 0; i <= limit; i++) {
        let flag = true;
        if (mainstring[i] === substring[0]) {

            for (let j = 0; j < n; j++) {
                if (mainstring[i + j] !== substring[j]) {
                    flag = false
                    break;
                }
            }
            if (flag) {
                return i
            }
        }
    }
    return -1
}



























