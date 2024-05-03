/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let LongestSub = 0;
    let set = new Set()
    let left = 0
    let right = 0
    while (right < s.length) {
        let curChar = s[right];
        if (!set.has(curChar)) {
            set.add(curChar)
            LongestSub = Math.max(LongestSub, set.size)
            right++;

        }
        else {
            set.delete(s[left])
            left++;
        }
    }


    return LongestSub;
};