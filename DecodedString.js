/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = []
    let count = 0
    let decodedString = ''
    for (let j of s) {
        if (j >= '0' && j <= '9') {
            count = count * 10 + parseInt(j)
        }
        else if (j === '[') {
            stack.push(count)
            stack.push(decodedString)
            count = 0
            decodedString = ''
        }
        else if (j === ']') {
            let prevDecodedString = stack.pop()
            let prevCount = stack.pop()
            decodedString = prevDecodedString + decodedString.repeat(prevCount)
        } else {
            decodedString += j
        }

    }
    return decodedString
};

