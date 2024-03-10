/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxi = Math.max(...candies)
    ans = []
    for(let i=0;i<candies.length;i++){
       ans.push(candies[i] + extraCandies >= maxi)
    }
    return ans
};