/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    //split->sort->join
    if (strs.length === 0) return ''
    let groupAnagram = {};
    for (let i = 0; i < strs.length; i++) {
        let anagram = strs[i].split('').sort().join('')
        if (!groupAnagram.hasOwnProperty(anagram)) {
            groupAnagram[anagram] = []
        }

        groupAnagram[anagram].push(strs[i])

    }
    return Object.values(groupAnagram)

};