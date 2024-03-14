/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length-1
    let MostWater = 0
    
    while(left<right){
        let CurrentWater = Math.min(height[left],height[right]) * (right-left)
        MostWater = Math.max(MostWater,CurrentWater)
        if(height[left]<height[right]){
            left++
        }else{
            right--
        }
    }
    return MostWater
};
