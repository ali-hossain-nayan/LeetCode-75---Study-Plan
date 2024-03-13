/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ans = []
    let product = 1
    
    for (let i=0;i<nums.length;i++){
        ans [i] = product
        product *= nums[i]
    }
    product = 1
    for (let i=nums.length-1;i>=0;i--){
        ans [i] *= product
        product *= nums[i]
    }
    return ans
};