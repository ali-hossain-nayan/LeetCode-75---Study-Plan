/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let Merged = ""
    let HighLength = Math.max(word1.length,word2.length)

    for(let i=0;i<HighLength;i++){
        if(i<word1.length){
            Merged += word1[i]
        }
        if(i<word2.length){
            Merged += word2[i]
        }
    }
    return Merged;
};