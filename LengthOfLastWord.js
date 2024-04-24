/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    //    console.log( s.trim().split(' ').at(-1).length)
    return s.trimEnd().split(' ').at(-1).length
};