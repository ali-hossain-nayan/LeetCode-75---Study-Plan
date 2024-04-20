/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let MinValue = Infinity;
    let MaxValue = -Infinity;

    for (let i of nums) {
        MinValue = Math.min(MinValue, i);
        MaxValue = Math.max(MaxValue, i);
    }

    let newArray = new Array(MaxValue - MinValue + 1).fill(0);
    for (let i of nums) {
        newArray[i - MinValue]++;
    }

    let count = 0;
    for (let i = newArray.length - 1; i >= 0; i--) {
        count += newArray[i];
        if (count >= k) {
            return i + MinValue;
        }
    }
};