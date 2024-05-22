/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let convertStr = nums.map((num) => num.toString())
    //here we check if concatenated string b+a > a+b then b should be place before the a..any two string
    let customSort = convertStr.sort((a, b) => (b + a) - (a + b))
    let result = customSort.join('')
    return result[0] === '0' ? '0' : result;

};