/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    let characters = s.split('')
    let i,j;
    for( i=0, j=s.length-1;i<j;){
         if(!vowels.has(characters[i])){
             i++
             continue;
         }
          if(!vowels.has(characters[j])){
             j--
             continue;
         }
         let temp = characters[i]
         characters[i]=characters[j]
         characters[j]=temp
         i++
         j--
    }
    return characters.join('')
};