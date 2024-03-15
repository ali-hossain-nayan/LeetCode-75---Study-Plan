/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0
    let count = 0
    let Maxavg = 0
    for(let i=0;i<k;i++){
        sum += nums[i]
    }
    Maxavg = sum/k
    for(let i=k;i<nums.length;i++){
        sum += nums[i] - nums[i-k]
        Maxavg = Math.max(Maxavg,sum/k)
    }
    return Maxavg
};