/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let sumOfGivenNums = 0;
    for (let i = 0; i < nums.length; i++) {
        sumOfGivenNums = sumOfGivenNums + nums[i];
    }
    let sumOfNums = nums.length * (nums.length + 1) / 2;
    return sumOfNums - sumOfGivenNums;
};