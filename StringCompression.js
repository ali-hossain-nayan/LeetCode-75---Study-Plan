/**
 * @param {character[]} chars
 * @return {number}
 */



var compress = function(chars) {
    let compressed = 0
    for(cur=0;cur<chars.length;){
       let count = 1
       let next = cur + 1
       while(next<chars.length && chars[next]===chars[cur]){
        count ++
        next ++

       }
       chars[compressed++] = chars[cur]
       if(count>1){
        let countStr = count.toString()
        for(let i of countStr){
            chars[compressed++] = i
        }
       }
       cur = next

    }
    return compressed
};