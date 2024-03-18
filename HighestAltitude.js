/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0
    let maxof = 0
    for(let i=0;i<gain.length;i++){
        sum += gain[i]
        maxof = Math.max(sum,maxof)
    }
    return maxof
};