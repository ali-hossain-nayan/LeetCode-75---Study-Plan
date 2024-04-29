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





const Anagram = (strs) => {
    let gpAnagram = {}
    for (let i = 0; i < strs.length; i++) {

        let anagrams = strs.split('').sort().join('');
        if(!gpAnagram.hasOwnProperty(anagrams)){//check the key already exists in the gpAnagram
               gpAnagram[anagrams]=[]//if doesnt then assign a empty array
        }
        gpAnagram[anagrams].push(strs[i])//and the push create anagrams into the anagram key 

        
    }

    return Object.values(gpAnagram)//return array of value from the object

}