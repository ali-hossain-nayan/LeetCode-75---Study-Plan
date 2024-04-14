/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let first = cost[0], second = cost[1];
    let temp;
    for (let i = 2; i < cost.length; i++) {
        temp = cost[i] + Math.min(first, second);
        first = second;
        second = temp;
    }
    return Math.min(first, second);
}