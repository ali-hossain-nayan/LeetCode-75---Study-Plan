/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sortS = s.split('').sort().join('')
    let sortT = t.split('').sort().join('')

    // for(let i=0;i<s;i++){
    //    for(let j=0;j<t;j++){
    //     if(s[i]!==t[j]){
    //         return false
    //     }
    //    } 
    // }
    return sortT.includes(sortS)
};