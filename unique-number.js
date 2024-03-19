/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const countMap = {};
    for (let i of arr) {
        if (countMap[i]) {
            countMap[i]++;
        } else {
            countMap[i] = 1;
        }
    }
    let occurrences = Object.values(countMap);
    return occurrences.length === new Set(occurrences).size;
};
