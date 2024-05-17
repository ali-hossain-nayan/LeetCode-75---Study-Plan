
/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
    let str = s.split(' ');
    let result1 = []
    for (let i = 0; i < str.length; i++) {
        result1.push(str[i].split('').reverse().join(''))
    }
    result1.sort()
    let result2 = []
    for (let i = 0; i < result1.length; i++) {
        result2.push(result1[i].slice(1).split('').reverse().join(''))
    }
    return result2.join(' ')

};