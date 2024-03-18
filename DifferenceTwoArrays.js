/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const result = [[], []];
    
    const removeDuplicates = (arr) => {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    };
    
    for (let i of nums1) {
        if (!nums2.includes(i)) {
            result[0].push(i);
        }
    }
    
    for (let j of nums2) {
        if (!nums1.includes(j)) {
            result[1].push(j);
        }
    }
    
    result[0] = removeDuplicates(result[0]);
    result[1] = removeDuplicates(result[1]);
    
    return result;
};
