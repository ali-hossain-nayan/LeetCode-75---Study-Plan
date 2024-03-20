/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    const countFrequency = (words) => {
        let freq = {};
        for (let char of words) {
            if (freq[char] ) {
                freq[char] ++
            } else {
                freq[char] = 1;
            }

        }
        return freq;
    };

    let count1 = countFrequency(word1);
    let count2 = countFrequency(word2);

    let  chars1 = Object.keys(count1).sort().join('');
    let chars2 = Object.keys(count2).sort().join('');
    if (chars1 !== chars2) {
        return false;
    }

    let freq1 = Object.values(count1).sort().join('');
    let freq2 = Object.values(count2).sort().join('');
    return freq1 === freq2;
};