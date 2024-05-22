/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let hashHightToName = {}
    for (let i = 0; i < heights.length; i++) {
        hashHightToName[heights[i]] = names[i]
    }

    let sortedHeights = Object.keys(hashHightToName).map(Number).sort((a, b) => b - a)

    let result = []
    for (let i of sortedHeights) {
        result.push(hashHightToName[i])
    }
    return result;
};