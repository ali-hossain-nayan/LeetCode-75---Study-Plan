/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = (str1, str2)=> {
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const len1 = str1.length;
    const len2 = str2.length;

    const gcdLength = gcd(len1, len2);
    const commonSubstring = str1.substring(0, gcdLength);

    if (commonSubstring.repeat(len1 / gcdLength) === str1 && commonSubstring.repeat(len2 / gcdLength) === str2) {
        return commonSubstring;
    } else {
        return "";
    }
};
    

