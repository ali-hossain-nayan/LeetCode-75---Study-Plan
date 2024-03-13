/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    
    for (let i of nums) {
        if (i <= first) {
            first = i;
        } else if (i <= second) {
            second = i;
        } else {
            return true; 
        }
    }
    
    return false; 
};
